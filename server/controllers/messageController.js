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
  //post to messages to table
  const {
    consumerTag,
    deliveryTag,
    redelivered,
    exchange,
    routingKey,
    contentType,
    contentEncoding,
    deliveryMode,
    priority,
    correlationId,
    replyTo,
    expiration,
    messageId,
    timestamp,
    type,
    userId,
    appId,
    clusterId,
    projectId,
  } = req.body;

  const text =
    `INSERT INTO messages (consumerTag,
    deliveryTag,
    redelivered,
    exchange,
    routingKey,
    contentType,
    contentEncoding,
    deliveryMode,
    priority,
    correlationId,
    replyTo,
    expiration,
    messageId,
    timestamp,
    type,
    userId,
    appId,
    clusterId,
    project_id) VALUES ('${consumerTag}', '${deliveryTag}', '${redelivered}', '${exchange}', '${routingKey}', '${contentType}', '${contentEncoding}', '${deliveryMode}', '${priority}', '${correlationId}', '${replyTo}', '${expiration}', '${messageId}', '${timestamp}', '${type}', '${userId}', '${appId}', '${clusterId}', '${projectId}') RETURNING *`;

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
