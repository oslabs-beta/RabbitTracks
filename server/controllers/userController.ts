const db = require("../models/elephantsql");

import { UserProjects, UserController, UserProjectReqBody } from "../../types";

import express, { Request, Response, NextFunction, RequestHandler } from "express";

const userController: UserController = {};

userController.getAllUserProjects = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } : UserProjectReqBody = req.body; //need type
  const queryString: string = `SELECT * FROM users_projects WHERE user_id = ${user_id}`;

  if (user_id) {
    await db
      .query(queryString)
      .then((data: Array<UserProjects>) => {
        //data[0].user_id
        res.locals.userprojects = data[0];
        console.log("Successfully got all user projects.");
        return next();
      })
      .catch((err: Error) => {
        return next({
          log: `Error in userController.getAllUserProjects... Query from database unsuccessful: ${JSON.stringify(
            err
          )}`,
          status: 500,
          message: "Query from database unsuccessful.",
        });
      });
  } else {
    return next({
      log: "Error in userController.getAllUserProjects... Did not receive user_id in getAllUserProjects request.",
      status: 500,
      message: "Did not receive user_id in getAllUserProjects request.",
    });
  }
};

module.exports = userController;
