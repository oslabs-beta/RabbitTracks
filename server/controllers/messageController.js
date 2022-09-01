const db = require("../models/elephantsql");

const messageController = {};

messageController.getAllMessages = async (req, res, next) => {
  console.log("Getting all messages...");

  // projectId will eventually come from somewhere... req.body?
  const projectId = 1;

  const queryString = `SELECT * FROM messages WHERE project_id = ${projectId}`;

  if (projectId) {
    await db
      .query(queryString)
      .then((data) => {
        res.locals.messages = data[0];
        console.log("Successfully got all messages.")
        return next();
      })
      .catch((err) => {
        return next({
          log: `Error in messageController.getAllMessages... Query from database unsuccessful: ${JSON.stringify(err)}`,
          status: 500,
          message: "Query from database unsuccessful.",
        });
      });
  } else {
    return next({
      log: "Error in messageController.getAllMessages... Did not receive projectId in request.",
      status: 500,
      message: "Did not receive projectId in request."
    })
  }
};

messageController.addMessage = async (req, res, next) => {
  console.log("Adding message to database...")

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

  // THIS CAUSES SQL ERROR 22P02 - Jerikko
  // const queryString = `INSERT INTO messages (consumerTag,
  //   deliveryTag,
  //   redelivered,
  //   exchange,
  //   routingKey,
  //   contentType,
  //   contentEncoding,
  //   deliveryMode,
  //   priority,
  //   correlationId,
  //   replyTo,
  //   expiration,
  //   messageId,
  //   timestamp,
  //   type,
  //   userId,
  //   appId,
  //   clusterId,
  //   project_id) VALUES ('${consumerTag}', '${deliveryTag}', '${redelivered}', '${exchange}', '${routingKey}', '${contentType}', '${contentEncoding}', '${deliveryMode}', '${priority}', '${correlationId}', '${replyTo}', '${expiration}', '${messageId}', '${timestamp}', '${type}', '${userId}', '${appId}', '${clusterId}', '${projectId}') RETURNING *`;

  // THIS WILL SUCCESSFULLY ADD MESSAGE INTO DATABASE - Jerikko
  const queryString = `INSERT INTO messages (consumerTag,
    deliveryTag,
    redelivered,
    exchange,
    routingKey,
    project_id) VALUES ('${consumerTag}', '${deliveryTag}', '${redelivered}', '${exchange}', '${routingKey}', '${projectId}') RETURNING *`;

  
  await db.query(queryString)
    .then((data) => {
      res.locals.message = data[0][0];
      console.log("Successfully added message to database.");
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in messageController.addMessage... Unable to add message to database: ${JSON.stringify(err)}`,
        status: 500,
        message: "Unable to add message to database.",
      });
    });
};

module.exports = messageController;
