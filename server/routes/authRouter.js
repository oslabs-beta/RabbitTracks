const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
// const userController = require("../controllers/userController");

router.post(
  "/signup",
  authController.encryptPassword,
  authController.signup,
  authController.createSession,
  (req, res) => {
    return res.status(200).send('Signup process successfully completed.');
  }
);

router.post(
  "/login",
  authController.verifyUser,
  authController.verifyPassword,
  authController.createSession, 
  (req, res) => {
    return res.status(200).send('Login process successfully completed.');
  }
);

module.exports = router;
