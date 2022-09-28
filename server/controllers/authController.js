require("dotenv").config();
const { QueryTypes } = require("sequelize");
const db = require("../models/elephantsql");
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
        log: `Error in authController.encryptPassword... Password hashing error: ${JSON.stringify(
          err
        )}`,
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

authController.signup = async (req, res, next) => {
  console.log("Signup in progress...");

  // https://sequelize.org/docs/v6/core-concepts/raw-queries/#bind-parameter

  const { email } = req.body;
  const params = [email, res.locals.encryptedPassword];
  // const queryString =
  //   `INSERT INTO users (user_email, user_password) VALUES ($1, $2) RETURNING user_id;`;

  console.log(email, res.locals.encryptedPassword);

  if (email) {
    try {
      const [results, metadata] = await db.query(
        `INSERT INTO users (user_email, user_password) VALUES ('test7@test.com', 'test_password');`
      );
      console.log("results... ", results);
      // const user = await Sequelize.create({ user_email: email, user_password: res.locals.encryptedPassword });
      // console.log('User... ', user)
      // res.locals.user_id = values.rows[0].user_id;
      // res.cookie("user_id", res.locals.user_id, { httpOnly: true });

      console.log("Signup completed.");
      return next();
    } catch (err) {
      return next({
        log: `Error in authController.signup... Error when attempting signup: ${JSON.stringify(
          err
        )}`,
        status: 500,
        message: "Unable to complete signup process.",
      });
    }
  } else {
    return next({
      log: "Error in authController.signup... No email inputted.",
      status: 400,
      message: "No email inputted.",
    });
  }
};

authController.verifyUser = async (req, res, next) => {
  console.log("Login in progress...");
  console.log("Verifying user exists in database...");
  const { email, password } = req.body;

  if (email && password) {
    const queryString =
      "SELECT user_id, user_password FROM users WHERE user_email=$1";
    const params = [email];
    try {
      const results = await db.query(queryString, params);
      if (results.rowCount > 0) {
        res.locals.encryptedPassword = results.rows[0].user_password;
        res.locals.user_id = results.rows[0].user_id;
        res.cookie("user_id", res.locals.user_id, { httpOnly: true });
        console.log("Verified user exists in database.");
        return next();
      } else {
        return next({
          log: "Error in authController.verifyUser... User does not exist in database.",
          status: 400,
          message: "User does not exist in database.",
        });
      }
    } catch (err) {
      return next({
        log: `Error in authController.verifyUser: ${JSON.stringify(err)}`,
        status: 500,
        message: "Error while querying user in database.",
      });
    }
  } else {
    return next({
      log: "Error in authController.verifyUser... Missing email and/or password.",
      status: 400,
      message: "Missing email and/or password.",
    });
  }
};

authController.verifyPassword = async (req, res, next) => {
  console.log("Verifying password...");

  const { password } = req.body;
  const encryptedPassword = res.locals.encryptedPassword;

  if (password && encryptedPassword) {
    try {
      const passwordVerified = await bcrypt.compare(
        password,
        encryptedPassword
      );

      if (passwordVerified) {
        console.log("Password verified... Successful login.");
        return next();
      } else {
        return next({
          log: "Error in authController.verifyPassword... Password not verified.",
          status: 400,
          message: "Password not verified.",
        });
      }
    } catch (err) {
      return next({
        log: `Error in authController.verifyPassword... Error while verifying password: ${JSON.stringify(
          err
        )}`,
        status: 500,
        message: "Error while verifying password.",
      });
    }
  } else {
    return next({
      log: "Error in authController.verifyPassword... Missing password and/or encrypted password.",
      status: 400,
      message: "Missing password and/or encrypted password.",
    });
  }
};

authController.createSession = async (req, res, next) => {
  console.log("Creating session_id...");

  const user_id = res.locals.user_id;
  const queryString = "UPDATE users SET session_key=$1 WHERE user_id=$2";

  try {
    const token = await jwt.sign({ user_id: user_id }, secret, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const params = [token, user_id];

    if (token && user_id) {
      await db.query(queryString, params);
      res.cookie("session_id", token, { httpOnly: true });
      console.log("Successfully created session_id.");
      return next();
    } else {
      return next({
        log: "Error in authController.createSession... Missing token or user_id.",
        status: 500,
        message: "Missing token or user_id.",
      });
    }
  } catch (err) {
    return next({
      log: `Error in authController.createSession... Error when attempting to create session_id after signup: ${JSON.stringify(
        err
      )}`,
      status: 500,
      message: "Unable to create session_id after signup.",
    });
  }
};

authController.verifySession = async (req, res, next) => {
  console.log("Verifying session...");
  const session_id = req.cookies.session_id;
  let user_id;

  if (session_id) {
    console.log("Verifying session_id is valid...");
    try {
      const verifiedToken = await jwt.verify(
        session_id,
        process.env.JWT_SECRET
      );

      if (verifiedToken) {
        console.log("Verified session_id is valid.");
        user_id = verifiedToken.user_id;
      } else {
        res.clearCookie("session_id");
        return next({
          log: "Error in authController.verifySession... Invalid session_id. Removed session_id.",
          status: 400,
          message: "Invalid session_id. Removed session_id.",
        });
      }
    } catch (err) {
      return next({
        log: `Error in authController.verifySession... Error while verifying session_id: ${JSON.stringify(
          err
        )}`,
        status: 500,
        message: "Error while verifying session_id.",
      });
    }
  } else {
    return next({
      log: "Error in authController.verifySession... session_id does not exist.",
      status: 400,
      message: "session_id does not exist.",
    });
  }

  console.log("Verifying session_id matches...");

  const queryString = "SELECT session_key FROM users WHERE user_id=$1";
  const params = [user_id];

  try {
    // const results = await db.query(queryString, params);
    if (results.rows[0].session_value === session_id) {
      console.log("Verified matching session_ids.");
      return next();
    } else {
      res.clearCookie("session_id");
      return next({
        log: "Error in authController.verifyUser... Unable to match session_ids. Removed session_id.",
        status: 400,
        message: "Unable to match session_ids. Removed session_id.",
      });
    }
  } catch (err) {
    return next({
      log: `Error in authController.verifySession... Error while querying session_key from database: ${JSON.stringify(
        err
      )}`,
      status: 500,
      message: "Error while querying session_key from database.",
    });
  }
};

module.exports = authController;
