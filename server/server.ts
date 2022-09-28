// const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

import express, { Application, Request, Response, NextFunction } from 'express'
import { ServerError } from './../types';

const PORT = process.env.PORT;

const authRouter = require("./routes/authRouter");
const messageRouter = require("./routes/messageRouter");

const app : Application = express();
const DIST_DIR = path.join(__dirname, "../build/");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files:
app.use(express.static(DIST_DIR));
app.use(express.static("../src/assets"));

// Routes
app.use("/auth", authRouter);
app.use("/messages", messageRouter);

// Serve index.html
app.get("/*", (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve(__dirname, HTML_FILE));
});


// 404 Catch-All
app.use("*", (req: Request, res: Response) => res.status(404).send("Not Found"));

// Universal Error Handler
app.use((err: ServerError, req: Request, res: Response, next : NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error.",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.error(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;