require("dotenv").config();

import { UserController } from "../../types";
import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";

const db = require("../models/elephantsql");
const userController: UserController = {};

userController.addProject = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    console.log("Adding new project...");
    const { projectName, projectURL } : { projectName: string, projectURL: string } = req.body;

    // this needs to be removed after authController.verifySession is functioning
    res.locals.user_id = 2;

    const queryString: string =
    `WITH project AS
        ( INSERT INTO projects (project_name, project_url)
        VALUES ('${projectName}', '${projectURL}')
        RETURNING projects.project_id )
    INSERT INTO users_projects (user_id, project_id) SELECT ${res.locals.user_id}, project_id FROM project RETURNING user_id`

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