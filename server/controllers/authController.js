require("dotenv").config();
// require db model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const saltFactor = parseInt(process.env.SALT_WORK_FACTOR);

const authController = {};

authController.encryptPassword = async (req, res, next) => {
  console.log("Encrypting password...");

  const { password, passwordConfirm } = req.body;
  if (password && passwordConfirm && password === passwordConfirm) {
    try {
      const encryptedPassword = await bcrypt.hash(password, saltFactor);
      res.locals.encryptedPassword = encryptedPassword;
      console.log("Password encrypted.");
      return next();
    } catch (err) {
      return next({
        log:
          `Error in authController.encryptPassword... Password hashing error: ${JSON.stringify(err)}`,
        status: 500,
        message: "Unable to encrypt password.",
      });
    }
  } else {
    return next({
      log: "Error in authController.encryptPassword... Passwords do not match.",
      status: 400,
      message: "Passwords do not match.",
    });
  }
};

authController.verifyPassword = async (req, res, next) => {
  console.log("Verifying password...");

  const { password } = req.body;
  const encryptedPassword = res.locals.encryptedPassword;

  if (password && encryptedPassword) {
    try {
      const passwordVerified = await bcrypt.compare(password, encryptedPassword);

      if (passwordVerified) {
        console.log("Password verified... Successful login.");
        return next();
      } else {
        return next({
          log: "Error in authController.verifyPassword... Password not verified.",
          status: 400,
          message: "Password not verified."
        })
      }
    } catch (err) {
      return next({
        log: `Error in authController.verifyPassword... Error while verifying password: ${JSON.stringify(err)}`,
        status: 500,
        message: "Error while verifying password."
      })
    }
  } else {
    return next({
      log: "Error in authController.verifyPassword... Missing password and/or encrypted password.",
      status: 400,
      message: "Missing password and/or encrypted password."
    })
  }
};

authController.createSession = async (req, res, next) => {
  console.log("Creating session_id...");

  const user_id = res.locals.user_id;
  const queryString = "UPDATE users SET session_value=$1 WHERE user_id=$2";

  try {
    const token = await jwt.sign({ id: user_id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const params = [ token, user_id ];

    if (token && user_id) {
      // await db.query(queryString, params);
      res.cookie("session_id", token, { httpOnly: true });
      console.log("Successfully created session_id.");
      return next();
    } else {
      return next({
        log:
          "Error in authController.createSession... Missing token or user_id.",
        status: 500,
        message: "Missing token or user_id.",
      });
    }
  } catch (err) {
    return next({
      log:
        `Error in authController.createSession... Error when attempting to create session_id after signup: ${JSON.stringify(err)}`,
      status: 500,
      message: "Unable to create session_id after signup.",
    });
  }
};

authController.verifySession = async (req, res, next) => {
  console.log("Verifying session_id...");
  // grab session_id and user_id from req.cookie
  const token = req.cookie.session_id;
  const user_id = req.cookie.user_id;
  // check if it matches from user table

};

module.exports = authController;
