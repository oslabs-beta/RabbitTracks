require("dotenv").config();
const { QueryTypes } = require("sequelize");
const db = require("../models/elephantsql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;
const jwtSecret = process.env.JWT_SECRET;
const saltFactor = parseInt(process.env.SALT_WORK_FACTOR);

import { Request, Response, NextFunction } from "express";
import {
  AuthController,
  AuthParams,
  AuthResults,
  AuthRequestBody,
} from "./../../types";

const authController: AuthController = {};

authController.encryptPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { password, passwordConfirm }: AuthRequestBody = req.body;
  if (password && passwordConfirm && password === passwordConfirm) {
    try {
      const encryptedPassword: string = await bcrypt.hash(password, saltFactor);
      res.locals.encryptedPassword = encryptedPassword;
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

authController.signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { firstName, lastName, email }: AuthRequestBody = req.body;
  const params: AuthParams = [
    firstName,
    lastName,
    email,
    res.locals.encryptedPassword,
  ];
  const queryString: string = `INSERT INTO users (first_name, last_name, user_email, user_password) VALUES ($1, $2, $3, $4) RETURNING user_id;`;

  if (email) {
    try {
      const results: Array<AuthResults> = await db.query(queryString, {
        bind: [...params],
        type: QueryTypes.INSERT,
      });

      res.locals.user_id = results[0][0].user_id;

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

authController.verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password }: AuthRequestBody = req.body;

  if (email && password) {
    const queryString: string =
      "SELECT user_id, user_password FROM users WHERE user_email=$1";
    const params: AuthParams = [email];
    try {
      const results: AuthResults = await db.query(queryString, {
        bind: [...params],
        type: QueryTypes.SELECT,
      });

      if (results.length > 0) {
        res.locals.encryptedPassword = results[0].user_password;
        res.locals.user_id = results[0].user_id;
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

authController.verifyPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { password }: AuthRequestBody = req.body;
  const encryptedPassword: string = res.locals.encryptedPassword;

  if (password && encryptedPassword) {
    try {
      const passwordVerified: boolean = await bcrypt.compare(
        password,
        encryptedPassword
      );
      if (passwordVerified) {
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

authController.createSession = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user_id: number = res.locals.user_id;
  const queryString: string =
    "UPDATE users SET session_key=$1 WHERE user_id=$2";

  try {
    const token: string = await jwt.sign({ user_id: user_id }, secret, {
      expiresIn: expiresIn,
    });

    const params: AuthParams = [token, user_id];

    if (token && user_id) {
      await db.query(queryString, {
        bind: [...params],
        type: QueryTypes.UPDATE,
      });
      res.cookie("session_id", token, { httpOnly: true });
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
      log: `Error in authController.createSession... Error when attempting to create session_id: ${JSON.stringify(
        err
      )}`,
      status: 500,
      message: "Unable to create session_id.",
    });
  }
};

authController.verifySession = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const session_id: string = req.cookies.session_id;
  let user_id: number;

  if (session_id) {
    try {
      const decodedToken: { user_id: number } = await jwt.verify(
        session_id,
        jwtSecret
      );
      if (decodedToken) {
        user_id = decodedToken.user_id;
      } else {
        res.clearCookie("session_id");
        return next({
          log: "Error in authController.verifySession... Invalid session_id. Removed session_id.",
          status: 400,
          message: "Invalid session_id. Removed session_id.",
        });
      }
    } catch (err) {
      if (err.message === "jwt expired") {
        return next({
          log: `Error in authController.verifySession... Session expired: ${JSON.stringify(
            err
          )}`,
          status: 500,
          message: "Session expired.",
        });
      } else
        return next({
          log: `Error in authController.verifySession... Error while decoding session_id: ${JSON.stringify(
            err
          )}`,
          status: 500,
          message: "Error while decoding session_id.",
        });
    }
  } else {
    return next({
      log: "Error in authController.verifySession... session_id does not exist.",
      status: 400,
      message: "session_id does not exist.",
    });
  }

  const queryString: string = "SELECT * FROM users WHERE user_id=$1";
  const params: AuthParams = [user_id];

  try {
    const results: AuthResults = await db.query(queryString, {
      bind: [...params],
      type: QueryTypes.SELECT,
    });
    if (results[0].user_id == user_id) {
      res.locals.user_id = results[0].user_id;
      return next();
    } else {
      res.clearCookie("session_id");
      return next({
        log: "Error in authController.verifyUser... Unable to verify that user is authorized. Removed session_id.",
        status: 400,
        message:
          "Unable to verify that user is authorized. Removed session_id.",
      });
    }
  } catch (err) {
    return next({
      log: `Error in authController.verifySession... Error while querying database for authorized user: ${JSON.stringify(
        err
      )}`,
      status: 500,
      message: "Error while querying database for authorized user.",
    });
  }
};

authController.logout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  res.clearCookie("session_id");
  return next();
};

module.exports = authController;
