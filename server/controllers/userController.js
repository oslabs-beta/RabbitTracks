require("dotenv").config();
const db = require("../models/elephantsql");

const userController = {};

userController.getAllUserProjects = async (req, res, next) => {
  //need to use logged in user_id to get projects from db

  const { user_id } = req.body;
  const queryString = `SELECT * FROM users_projects WHERE user_id = ${user_id}`;

  if (user_id) {
    await db
      .query(queryString)
      .then((data) => {
        console.log(data);
        res.locals.userprojects = data[0];
        console.log("Successfully got all user projects.");
        return next();
      })
      .catch((err) => {
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
