const express = require("express");
const auth = require("./Auth");
const user = require("./User");
const message = require("./Message");

const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/message", message);
