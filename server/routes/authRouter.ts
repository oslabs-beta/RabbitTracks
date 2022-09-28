import { AuthController } from "../../types";
import express, { Request, Response } from "express"
const router = express.Router()


const authController : AuthController = require("../controllers/authController");
// const userController = require("../controllers/userController");

router.post(
  "/signup",
  authController.encryptPassword,
  authController.signup,
  authController.createSession,
  authController.verifySession,
  (req: Request, res: Response) => {
    return res.status(200).send('Successful signup!');
  }
);

router.post(
  "/login",
  authController.verifyUser,
  authController.verifyPassword,
  authController.createSession, 
  // authController.verifySession,
  (req: Request, res: Response) => {
    return res.status(200).send('Successful login!');
  }
);

module.exports = router;
