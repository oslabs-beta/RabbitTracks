const db = require("../models/elephantsql");

import { UserProjects, UserController } from "../../types";

import express, { Request, Response, NextFunction, RequestHandler } from "express";

const userController: UserController = {};

userController.getAllUserProjects = async (req: Request, res: Response, next: NextFunction) => {
  const user_id = res.locals.user_id
  const queryString: string = `SELECT projects.project_name, projects.project_url from users_projects INNER JOIN projects 
  on users_projects.project_id = projects.project_id where user_id = ${user_id}`

  if (user_id) {
    await db
      .query(queryString)
      .then((data: Array<UserProjects>) => {
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
