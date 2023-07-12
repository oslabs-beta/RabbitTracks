require("dotenv").config();

import { UserProjects, UserController } from "../../types";
import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";

const db = require("../models/elephantsql");

const userController: UserController = {};

// The getAllUserProjects method takes the user_id from res.locals and selects all user projects from the database
userController.getAllUserProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user_id = res.locals.user_id;
  const queryString: string = `SELECT projects.project_url, projects.project_id, users_projects.project_name FROM users_projects 
  RIGHT JOIN projects ON users_projects.project_id = projects.project_id WHERE user_id = ${user_id}
  ORDER BY users_projects.created_at DESC`;

  if (user_id) {
    await db
      .query(queryString)
      .then((data: Array<UserProjects>) => {
        res.locals.userprojects = data[0];
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

// The addProject method takes the projectName and projectURL from the request body (user input) and inserts into the database
//  a new project.
userController.addProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const {
    projectName,
    projectURL,
  }: { projectName: string; projectURL: string } = req.body;

  const queryString: string = `INSERT INTO projects (project_url)
        VALUES ('${projectURL}')
        ON CONFLICT (project_url) DO NOTHING;
    INSERT INTO users_projects (user_id, project_id, project_name) SELECT ${res.locals.user_id}, projects.project_id, '${projectName}' FROM projects WHERE project_url = '${projectURL}' RETURNING user_id`;

  await db
    .query(queryString, { type: QueryTypes.INSERT })
    .then((value: Array<Array<{ user_id: number }>>): void => {
      // Unknown what the purpose of the below line is (Line 68):
      res.locals.message = value[0][0];
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
};

userController.deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email = req.params.email;
  const deleteQuery = "DELETE FROM users WHERE user_email = $1 RETURNING *";

  try {
    const [deletedUser] = await db.query(deleteQuery, {
      bind: [email],
      type: QueryTypes.DELETE,
    });

    if (!deletedUser) {
      res.locals.deleteduser = null;
    } else {
      // Store the deleted user's data in res.locals.deleteduser
      res.locals.deleteduser = deletedUser["user_email"];
    }
    next();
  } catch (error) {
    next({
      log: `Error in userController.deleteuser... Unable to get single user: ${JSON.stringify(
        error
      )}`,
      status: 500,
      message: error,
    });
  }
};

userController.getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const usersTable = "SELECT * FROM users";
  try {
    const results = await db.query(usersTable);
    res.locals.allusers = results;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
