require("dotenv").config();
const db = require("../models/elephantsql");

import { UserController } from "../../types";
import { Request, Response, NextFunction } from "express";
import { QueryTypes } from "sequelize";

const userController: UserController = {};

userController.addProject = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    console.log("Adding new project...");
    const { projectName, projectURL } = req.body;

    const queryString: string =
    `WITH project AS
        ( INSERT INTO projects (project_name, project_url)
        VALUES ('${projectName}', '${projectURL}')
        RETURNING projects.project_id )
    INSERT INTO users_projects (user_id, project_id) SELECT ${res.locals.user_id}, project_id FROM project RETURNING user_id`
}

module.exports = userController;