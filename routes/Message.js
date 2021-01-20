const express = require("express");
const Message = require("../models/message");

const router = express.Router();

router.post("/send", (req, res) => {
  const sms = new Message(req.body);
  sms
    .save()
    .then((item) => {
      res.send("sms veritabanina kaydedildi.");
    })
    .catch((err) => {
      res.status(400).send("sms veritabanina kaydedilmedi?");
    });
});

router.get("/with_user", (req, res) => {
  const sms = Message.find((data) => data.id === parseInt(req.params.id));
  sms ? res.json(sms) : res.status(404).json({ message: "withUser not found" });
});

router.get("/convos", (req, res, next) => {
  const convos = Message.find((data) => data.id === parseInt(req.params.id));
  convos
    ? res.json(convos)
    : res.status(404).json({ message: "convos not found" });
});

module.exports = router;
