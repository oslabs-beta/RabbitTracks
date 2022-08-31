require("dotenv").config();
const { QueryTypes } = require("sequelize");
const db = require("../models/elephantsql");

const messageController = {};

messageController.getMessages = async (req, res, next) => {  
  console.log('Getting all messages...');
  
  // will eventually incorporate project id, user id into query

  // incorporate project id 1 for dummy data
  try {
    const queryString = "SELECT * FROM messages";
  
    const messages = await db.query(queryString, { type: QueryTypes.SELECT });
    console.log('Messages from messageController... ', messages);
  
    res.locals.messages = messages;
    console.log("Successuly got all messages.");
  
    return next();
  } catch (err) {
    return next({
      log:
        `Error in messageController.getMessages... Error when attempting get all messages: ${JSON.stringify(err)}`,
      status: 500,
      message: "Unable to get all messages.",
    });
  }
}

module.exports = messageController;