// const { Sequelize } = require("sequelize");
import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize(process.env.SQL_URI);
try {
  console.log("Connecting to database...");
  sequelize.authenticate();
  console.log("Connection to database has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database: ", err);
}

module.exports = sequelize;
