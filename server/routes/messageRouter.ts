// const express = require("express");
// // const {Request, Response} = express
// const router = express.Router();
import express, {Request, Response} from "express"
const router = express.Router()

// const authController = require("../controllers/authController");
const messageController = require("../controllers/messageController");

router.get(
  "/get-all-messages",
  // authController.verifySession,
  messageController.getAllMessages,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.messages);
  }
);

router.post(
  "/add-message",
  // authController.verifySession,
  messageController.addMessage,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.message);
  }
);

module.exports = router;
// export {};
