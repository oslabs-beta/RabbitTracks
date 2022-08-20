const { Sequelize } = require("sequelize");

//Passing a connection URI
const client = new Sequelize(
  "postgres://rqbingxx:76BNWZGhlG4TBY8mgdFyHRtJ0hNEdhQU@suleiman.db.elephantsql.com/rqbingxx"
);

try {
  client.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = client;
