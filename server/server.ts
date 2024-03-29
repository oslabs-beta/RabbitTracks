const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");

import express, { Application, Request, Response, NextFunction } from "express";
import { ServerError } from "./../types";

const PORT = process.env.PORT;

const authRouter = require("./routes/authRouter");
const messageRouter = require("./routes/messageRouter");
const userRouter = require("./routes/userRouter");

const app: Application = express();
const http = require("http");
const httpServer = http.createServer(app);
const DIST_DIR = path.join(__dirname, "../build/");
const HTML_FILE = path.join(DIST_DIR, "index.html");

// Middleware
app.use(cookieParser()); // Parse cookies from the request
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON in request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// Serve static files:
app.use(express.static(DIST_DIR));
app.use(express.static("../src/assets"));

// Routes - mounting routers for handling related-routes
app.use("/auth", authRouter);
app.use("/messages", messageRouter);
app.use("/user", userRouter);

// Serve index.html
app.get("/*", (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve(__dirname, HTML_FILE));
});

// 404 Catch-All
app.use(
  "*",
  (req: Request, res: Response) => res.status(404).send("Not Found!!") // Handle undefined routes with a 404 error
);

// Universal Error Handler
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error.",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message); // Handle errors with a JSON response
});

// Establish server-side socket connection
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:8080"], // Specify allowed origins for socket connections
    methods: ["GET", "POST"], // Specify allowed HTTP methods
  },
});
const messagesSocket = io.of("/messages");
messagesSocket.on("connection", (socket: any) => {
  socket.join("consume-messages"); // Join the "consume-messages" room
  socket.on("join", function (room: any) {
    socket.join(room); // Join a specified room
  });
  socket.on("message-added", function () {
    socket.to("consume-messages").emit("message-added");
  });
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
