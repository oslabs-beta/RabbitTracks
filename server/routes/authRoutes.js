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
  /* verify user, verify session_id (if it exists), create session*/ (req, res) => {
    return res.status(200).json(/* verified_id? */);
  }
);

module.exports = router;
