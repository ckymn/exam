const express = require("express");
const Message = require("../models/message");

const router = express.Router();

router.get("/message/with_user", (req, res) => {
  res.render("auth/register");
});

router.get("/message/convos", (req, res, next) => {
  res.render("auth/login");
});

router.post("/message/send", (req, res) => {
  const { user } = req.body;
  Message.create({
    text: String,
    user: {
      id,
      username,
      email,
    },
    send: Date,
  });
});

// varsa "logout" kisimina yonlendirecegiz
// router.get('/logout', (req, res, next) => {
//   req.session.destroy(() =>{
//     res.redirect('/')
//   })
// })

module.exports = router;
