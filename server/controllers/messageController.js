require("dotenv").config();
const { QueryTypes } = require("sequelize");
const db = require("../models/elephantsql");

const messageController = {};

messageController.getMessages = async (req, res, next) => {  
  console.log('Getting all messages...');
  
  // Eventually incorporate project_id, user_id into query

  // incorporate project_id=1 for dummy data
  try {
    const queryString = "SELECT * FROM messages WHERE project_id=1";
  
    const messages = await db.query(queryString, { type: QueryTypes.SELECT });  
    res.locals.messages = messages;
    console.log("Successfully got all messages.");
  
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