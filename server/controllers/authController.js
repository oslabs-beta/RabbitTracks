require("dotenv").config();
// require db model
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const saltFactor = parseInt(process.env.SALT_WORK_FACTOR);

const authController = {};

authController.encryptPassword = async (req, res, next) => {
  const { password } = req.body;
  if (password) {
    console.log("Encrypting password...");

    try {
      const encryptedPassword = await bcrypt.hash(password, saltFactor);
      res.locals.encryptedPassword = encryptedPassword;
      console.log('Password encrypted.')
      return next();
    } catch (err) {
      return next({
        log:
          "Error in authController.encryptPassword... Password hashing error: " +
          JSON.stringify(err),
        status: 500,
        message: "Unable to encrypt password.",
      });
    }
  } else {
    return next({
      log: "Error in authController.encryptPassword... No password inputted.",
      status: 400,
      message: "No password inputted.",
    });
  }
};

authController.createSession = async (req, res, next) => {
  
};

module.exports = authController;