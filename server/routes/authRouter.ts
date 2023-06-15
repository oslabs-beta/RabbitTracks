import { AuthController } from "../../types";
import express, { Request, Response } from "express";
const router = express.Router();

const authController: AuthController = require("../controllers/authController");

// Signup endpoint
router.post(
  "/signup",
  authController.encryptPassword,
  authController.signup,
  authController.createSession,
  (req: Request, res: Response) => {
    return res.status(200).send("Successful signup!");
  }
);

// Login endpoint
router.post(
  "/login",
  authController.verifyUser,
  authController.verifyPassword,
  authController.createSession,
  (req: Request, res: Response) => {
    return res.status(200).send("Successful login!");
  }
);

// Logout endpoint
router.post("/logout", authController.logout, (req: Request, res: Response) => {
  return res.status(200).send("Successful logout!");
});

module.exports = router;
