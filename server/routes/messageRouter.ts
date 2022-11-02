import express, { Request, Response } from "express"
import { AuthController } from "../../types";
const router = express.Router()

const authController : AuthController = require("../controllers/authController");
const messageController = require("../controllers/messageController");

router.post(
  "/get-all-messages",
  authController.verifySession,
  messageController.getAllMessages,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.messages);
  }
);

router.post(
  "/add-message",
  messageController.addMessage,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.message);
  }
);

router.post(
  "/run-consume",
  messageController.runConsume,
  (req: Request, res: Response) => {
    return res.status(200).send('Consume file started');
  }
)

module.exports = router;
