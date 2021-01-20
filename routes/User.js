const express = require("express");
const User = require("../models/auth");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("/api/user");
});

router.get("/search", (req, res, next) => {
  const user = User.find((user) => user.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: "User not found." });

  res.send("/api/user/search");
});

module.exports = router;
