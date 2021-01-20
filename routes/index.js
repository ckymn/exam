const express = require("express");
const Auth = require("./Auth");
const User = require("./User");
const Message = require("./Message");

const router = express.Router();

router.use("/auth", Auth);
router.use("/user", User);
router.use("/message", Message);
