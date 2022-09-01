const express = require("express");
const db = require("../models/elephantsql");
const router = express.Router();
const { addMessage, getMessages } = require("../controllers/messageController");

router.get("/", getMessages, (req, res) => {
  return res.status(200).send(res.locals.messages);
});

router.post("/", addMessage, (req, res) => {
  return res.status(200);
});
