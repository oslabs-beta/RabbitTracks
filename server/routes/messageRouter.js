const express = require("express");
const router = express.Router();


// const authController = require("../controllers/authController");
const messageController = require("../controllers/messageController");
// const userController = require("../controllers/userController");


router.get(
  "/get-all-messages",
  // authController.verifySession,
  messageController.getMessages,
  (req, res) => {
    return res.status(200).json(res.locals.messages);
  }
);

module.exports = router;