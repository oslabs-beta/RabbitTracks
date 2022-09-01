// post request (will be from consume message)

// get all messages for loading page ..... put in server.js/routes too!
const db = require("../models/elephantsql");

const getMessages = (req, res, next) => {
  // ***need to have project id from user here
  const projID = 1;
  const text = `SELECT * FROM messages WHERE project_id = ${projID}`;

  db.query(text)
    .then((data) => {
      res.locals.messages = data.rows;
      return next();
    })
    .catch((err) => {
      return next({ log: err, message: { err: "catch in getMessages" } });
    });
};

const addMessage = (req, res, next) => {
  //post to messages to table
  return next();
};

module.exports = {
  getMessages,
  addMessage,
};
