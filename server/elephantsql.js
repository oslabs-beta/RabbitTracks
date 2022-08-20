const { Sequelize } = require("sequelize");

//Passing a connection URI
const client = new Sequelize(process.env.URI);

try {
  client.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = client;
