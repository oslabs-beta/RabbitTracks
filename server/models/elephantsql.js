const { Pool } = require("pg");
const { Sequelize, Model, DataTypes } = require("sequelize");
require("dotenv").config();

//Passing a connection URI
const sequelize = new Sequelize("postgres://rqbingxx:76BNWZGhlG4TBY8mgdFyHRtJ0hNEdhQU@suleiman.db.elephantsql.com/rqbingxx");

const User = (sequelize, DataTypes) => sequelize.define('User', {
  // Model attributes are defined here
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
}, {
  // Other model options go here
});

try {
  sequelize.authenticate();
  console.log("Database connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = { sequelize, User };
