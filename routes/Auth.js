const express = require("express");
const Auth = require("../models/auth");
const {
  authPost_register,
  authPost_login,
  authGet_logout,
} = require("../controllers/auth");

const router = express.Router();

//register
router.post("/register", authPost_register);

// login
router.post("/login", authPost_login);

//logout
router.get("/logout", authGet_logout);

module.exports = router;
