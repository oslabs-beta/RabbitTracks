const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors")

import express, { Application, Request, Response, NextFunction } from "express";
import { ServerError } from "./../types";
import { Socket, SocketType } from 'dgram';

const PORT = process.env.PORT;

const authRouter = require("./routes/authRouter");
const messageRouter = require("./routes/messageRouter");
const userRouter = require("./routes/userRouter")

const app: Application = express();
const http = require('http');
const httpServer = http.createServer(app);
const DIST_DIR = path.join(__dirname, "../build/");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(cookieParser());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files:
app.use(express.static(DIST_DIR));
app.use(express.static("../src/assets"));

// Routes
app.use("/auth", authRouter);
app.use("/messages", messageRouter);
app.use("/user", userRouter)

// Serve index.html
app.get("/*", (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve(__dirname, HTML_FILE));
});

// 404 Catch-All
app.use("*", (req: Request, res: Response) =>
  res.status(404).send("Not Found!!")
);

// Universal Error Handler
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error.",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  // console.error(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Establish server-side socket connection
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ['http://localhost:8080'],
    methods: ["GET", "POST"]
  },
});

const messagesSocket = io.of('/messages');

messagesSocket.on('connection', (socket: any) => {

  console.log(`Socket connection established in server: ${socket.id}`);
  socket.join('consume-messages')

  socket.on('join', function(room: any) {
    socket.join(room);
  });
  
  socket.on('message-added', function () {
    console.log('notifying MessagesContainer of new message')
    socket.to('consume-messages').emit('message-added');
  });

});


httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;