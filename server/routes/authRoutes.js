const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post(
  "/signup",
  authController.encryptPassword,
  userController.signup,
  /* create session */ (req, res) => {
    return res.status(200).json(res.locals.user_id);    // do we need to return anything?
  }
);

router.post(
  "/login",
  /* verify user, create session*/ (req, res) => {
    return res.status(200).json(/* verified_id? */);
  }
);

module.exports = router;
