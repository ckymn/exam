const messageGet_send = async (req, res, next) => {
  res.send("/api/message/send/convos");
  const convos = await Message.find(
    (data) => data.id === parseInt(req.params.id)
  );
  convos
    ? res.json(convos)
    : res.status(404).json({ message: "convos not found" });
};

const messagePost = async (req, res) => {
  res.send("/api/message/send");
  const sms = new Message(req.body);
  await sms
    .save()
    .then((item) => {
      res.send("sms veritabanina kaydedildi.");
    })
    .catch((err) => {
      res.status(400).send("sms veritabanina kaydedilmedi?");
    });
};

const messageGet_with_user = async (req, res) => {
  res.send("/api/message/send/with_user");
  const sms = await Message.find((data) => data.id === parseInt(req.params.id));
  sms ? res.json(sms) : res.status(404).json({ message: "withUser not found" });
};

module.exports = {
  messageGet_send,
  messagePost,
  messageGet_with_user,
};
