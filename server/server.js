const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
DIST_DIR = path.join(__dirname, "../build/");
HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files:
app.use(express.static(DIST_DIR));
app.use(express.static("../src/assets"));

// Serve index.html
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, index.html));
});

//Passing a connection URI
const sequelize = new Sequelize(
  "postgres://rqbingxx:76BNWZGhlG4TBY8mgdFyHRtJ0hNEdhQU@suleiman.db.elephantsql.com/rqbingxx"
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Routes

// 404 Catch-All
app.use("*", (req, res) => res.status(404).send("Not Found"));

// Universal Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error.",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.error(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
