const express = require("express");
const User = require("../models/users");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/user", (req, res) => {
  res.json(User);
});

router.get("/user/search", (req, res, next) => {
  const user = User.find((user) => user.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: "User not found." });
});

module.exports = router;
