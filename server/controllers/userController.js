require("dotenv").config();
// require db model

const userController = {};

userController.signup = async (req, res, next) => {
  console.log("Signup in progress...");

  const { email } = req.body;
  const params = [email, res.locals.encryptedPassword];
  const queryString =
    "INSERT INTO users (user_email, user_password) VALUES ($1, $2) RETURNING user_id";

  if (email) {
    try {
      // const values = await db.query(queryString, params);
      // res.locals.user_id = values.rows[0].user_id

      console.log("Signup completed.");
      return next();
    } catch (err) {
      return next({
        log:
          "Error in userController.signup... Error when attempting signup: " +
          JSON.stringify(err),
        status: 500,
        message: "Unable to complete signup process.",
      });
    }
  } else {
    return next({
      log: "Error in userController.signup... No email inputted.",
      status: 400,
      message: "No email inputted.",
    });
  }
};

module.exports = userController;
