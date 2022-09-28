require("dotenv").config();
const db = require("../models/elephantsql");

const userController = {};

userController.getAllUserProjects = async (req, res, next) => {
    
}

// userController.signup = async (req, res, next) => {
//   console.log("Signup in progress...");

//   const { email } = req.body;
//   const params = [ email, res.locals.encryptedPassword ];
//   const queryString =
//     "INSERT INTO users (user_email, user_password) VALUES ($1, $2) RETURNING user_id";

//   if (email) {
//     try {
//       // const values = await db.query(queryString, params);
//       // res.locals.user_id = values.rows[0].user_id;
//       // res.cookie(user_id, res.locals.user_id, { httpOnly: true });

//       console.log("Signup completed.");
//       return next();
//     } catch (err) {
//       return next({
//         log:
//           "Error in userController.signup... Error when attempting signup: " +
//           JSON.stringify(err),
//         status: 500,
//         message: "Unable to complete signup process.",
//       });
//     }
//   } else {
//     return next({
//       log: "Error in userController.signup... No email inputted.",
//       status: 400,
//       message: "No email inputted.",
//     });
//   }
// };

// userController.verifyUser = async (req, res, next) => {
//   console.log("Login in progress...");
//   console.log("Verifying user exists in database...")
//   const { email, password } = req.body;

//   if (email && password) {
//     const queryString = "SELECT user_id, password FROM users WHERE email=$1";
//     const params = [ email ];
//     try {
//       // const results = await db.query(queryString, params);
//       if (results.rowCount > 0) {
//         res.locals.encryptedPassword = results.rows[0].user_password;
//         res.locals.user_id = results.rows[0].user_id;
//         console.log("Verified user exists in database.");
//         return next();
//       } else {
//         return next({
//           log: "Error in userController.verifyUser... User does not exist in database.",
//           status: 400,
//           message: "User does not exist in database.",
//         });
//       }
//     } catch (err) {
//       return next({
//         log: `Error in userController.verifyUser: ${JSON.stringify(err)}`,
//         status: 500,
//         message: "Error while querying user in database."
//       })
//     }
//   } else {
//     return next({
//       log: "Error in userController.verifyUser... Missing email and/or password.",
//       status: 400,
//       message: "Missing email and/or password.",
//     });
//   }

// }

module.exports = userController;
