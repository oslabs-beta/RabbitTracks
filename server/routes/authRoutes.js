const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post(
  "/signup",
  authController.encryptPassword,
  userController.signup,
  authController.createSession,
  (req, res) => {
    return res.status(200);
  }
);

router.post(
  "/login",
  userController.verifyUser,
  authController.verifyPassword,
  authController.createSession, 
  (req, res) => {
    return res.status(200);
  }
);

module.exports = router;
