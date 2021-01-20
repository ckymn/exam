const express = require("express");
const User = require("../models/auth");
const { userGet, userGet_search } = require("../controllers/user");
const router = express.Router();


router.get("/", userGet);

router.get("/search", userGet_search);

module.exports = router;
