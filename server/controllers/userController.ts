require("dotenv").config();

import { UserProjects, UserController } from "../../types";
import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";

const db = require("../models/elephantsql");

const userController: UserController = {};

userController.getAllUserProjects = async (req: Request, res: Response, next: NextFunction) => {
  const user_id = res.locals.user_id
  const queryString: string = `SELECT projects.project_name, projects.project_url, projects.project_id FROM users_projects 
  RIGHT JOIN projects ON users_projects.project_id = projects.project_id WHERE user_id = ${user_id}`

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

userController.addProject = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    console.log("Adding new project...");
    const { projectName, projectURL } : { projectName: string, projectURL: string } = req.body;

    const queryString: string =
    `INSERT INTO projects (project_url)
        VALUES ('${projectURL}')
        ON CONFLICT (project_url) DO NOTHING;
    INSERT INTO users_projects (user_id, project_id, project_name) SELECT ${res.locals.user_id}, projects.project_id, '${projectName}' FROM projects WHERE project_url = '${projectURL}' RETURNING user_id`

    console.log('queryString --> ',queryString)


    await db
    .query(queryString, { type: QueryTypes.INSERT })
    .then((value: Array<Array<{ user_id: number }>>): void => {
      res.locals.message = value[0][0];
      console.log("data -->", value);
      console.log("Successfully added project to database.");
      return next();
    })
    .catch((err: Error) => {
      return next({
        log: `Error in userController.addProject... Unable to add project to database: ${JSON.stringify(
          err
        )}`,
        status: 500,
        message: "Unable to add project to database.",
      });
    });
}

module.exports = userController;