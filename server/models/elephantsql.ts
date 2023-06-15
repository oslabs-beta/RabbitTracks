import { Sequelize } from "sequelize";
// Declare sequelize variable
let sequelize: Sequelize;

try {
  // Check if SQL_URI environment variable exists
  if (process.env.SQL_URI) {
    // Create a new Sequelize instance with SQL_URI and logging option
    sequelize = new Sequelize(process.env.SQL_URI, {
      logging: false,
    });
  } else {
    // Throw an error if SQL_URI environment variable is missing
    throw new Error("Missing SQL_URI environment variable");
  }

  // Authenticate the sequelize connection
  sequelize
    .authenticate()
    .then(() => {
      // Connection successful
      console.log("Connected to the database");
    })
    .catch((err: any) => {
      // Connection error
      console.error("Unable to connect to the database:", err);
    });
} catch (err) {
  // Catch any error occurred during connection setup
  console.error("Unable to connect to the database: ", err);
}

// Export the sequelize instance
module.exports = sequelize;
