const { Sequelize } = require("sequelize");

//Passing a connection URI
const client = new Sequelize(process.env.URI);

try {
  console.log("Connecting to database...")
  client.authenticate();
  console.log("Connection to database has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database: ", err);
}

module.exports = client;


/* 
SELECT * FROM information_schema.columns
WHERE table_name = ‘[tablename]’
*/