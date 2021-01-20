const express = require("express");
const Message = require("../models/message");
const {
  messagePost,
  messageGet_with_user,
  messageGet_send,
} = require("../controllers/message");

const router = express.Router();

router.post("/send", messagePost);

router.get("/with_user", messageGet_with_user);

router.get("/convos", messageGet_send);

module.exports = router;
