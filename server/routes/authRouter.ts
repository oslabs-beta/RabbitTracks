import { AuthController } from "../../types";
import express, { Request, Response } from "express"
const router = express.Router()


const authController : AuthController = require("../controllers/authController");

router.post(
  "/signup",
  authController.encryptPassword,
  authController.signup,
  authController.createSession,
  (req: Request, res: Response) => {
    return res.status(200).send('Successful signup!');
  }
);

router.post(
  "/login",
  authController.verifyUser,
  authController.verifyPassword,
  authController.createSession,
  (req: Request, res: Response) => {
    return res.status(200).send('Successful login!');
  }
);

module.exports = router;
