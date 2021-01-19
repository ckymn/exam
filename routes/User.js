const express = require("express");
const User = require("../models/users");
const bodyParser = require("body-parser");

const router = express.Router();

router.get("/user", (req, res) => {
  res.send("User page");
});

router.get("/user/search", (req, res, next) => {
  const userId = req.body.data;
  if (userId) {
    req.user = User.find((user) => user.id === userId);
  }
  next();
});

module.exports = router;
