// post request (will be from consume message)

// get all messages for loading page ..... put in server.js/routes too!
const { default: cluster } = require("cluster");
const db = require("../models/elephantsql");

const getMessages = (req, res, next) => {
  // ***need to have project id from user here
  const projectId = 1;
  const text = `SELECT * FROM messages WHERE project_id = ${projectId}`;

  db.query(text)
    .then((data) => {
      console.log("this is data, ", data[0]);
      res.locals.messages = data[0];
      console.log("getMessages worked");
      return next();
    })
    .catch((err) => {
      return next({ log: err, message: { err: "catch in getMessages" } });
    });
};

const addMessage = (req, res, next) => {
  
  // create SQL query text and omit undefined values
  let columnText = '';
  let valuesText = '';
  let headers;
  const columns = Object.keys(req.body)
  for (let i = 0; i < columns.length; i++) {
    // set aside headers for now, we'll need to come back and add info from headers into deaths table
    if (columns[i] === 'headers') {
      headers = req.body[columns[i]];
    }
    // for any properties that aren't undefined, add them to the query text
    else if (columns[i] !== undefined) {
      if (columnText.length > 0) {
        columnText += ', ';
        valuesText += ', ';
      }
      columnText += columns[i] === 'projectId' ? `project_id` : `${columns[i]}`;
      valuesText += `'${req.body[columns[i]]}'`;
    }
  }
  
  const text = `INSERT INTO messages (${columnText}) VALUES (${valuesText}) RETURNING *`;
  
  // insert message into database
  db.query(text)
  .then((data) => {
    console.log("this is data", data);
      res.locals.message = data[0][0];
      console.log("add message working");
      return next();
    })
    .catch((err) => {
      return next({ log: err, message: { err: "catch in addMessage" } });
    });
};

module.exports = {
  getMessages,
  addMessage,
};
