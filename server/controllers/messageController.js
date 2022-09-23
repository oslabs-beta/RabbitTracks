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
        console.log("Successfully got all messages.");
        return next();
      })
      .catch((err) => {
        return next({
          log: `Error in messageController.getAllMessages... Query from database unsuccessful: ${JSON.stringify(
            err
          )}`,
          status: 500,
          message: "Query from database unsuccessful.",
        });
      });
  } else {
    return next({
      log: "Error in messageController.getAllMessages... Did not receive projectId in getAllMessages request.",
      status: 500,
      message: "Did not receive projectId in getAllMessages request.",
    });
  }
};

messageController.addMessage = async (req, res, next) => {
  console.log("Adding message to database...");

  // const {
  //   consumerTag,
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
  //   projectId,
  // } = req.body;

  // THIS CAUSES SQL ERROR 22P02 - INVALID TEXT REPRESENTATION - Jerikko
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
  // const queryString = `INSERT INTO messages (consumerTag,
  //   deliveryTag,
  //   redelivered,
  //   exchange,
  //   routingKey,
  //   project_id) VALUES ('${consumerTag}', '${deliveryTag}', '${redelivered}', '${exchange}', '${routingKey}', '${projectId}') RETURNING *`;
  console.log("req.body in messageController: ", req.body)
  let columnText = '';
  let valuesText = '';
  let headers;
  const columns = Object.keys(req.body)
  console.log('Columns in req.body: ', columns)
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

  const queryString = `INSERT INTO messages (${columnText}) VALUES (${valuesText}) RETURNING *`;

  await db
    .query(queryString)
    .then((data) => {
      res.locals.message = data[0][0];
      console.log("Successfully added message to database.");
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in messageController.addMessage... Unable to add message to database: ${JSON.stringify(
          err
        )}`,
        status: 500,
        message: "Unable to add message to database.",
      });
    });
};

module.exports = messageController;
