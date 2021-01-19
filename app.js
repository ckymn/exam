const express = require("express");
const mongoose = require("mongoose");
const connectMongoo = require("connect-mongo");

const message = require("./routes/Message");
const user = require("./routes/User");
const auth = require("./routes/Auth");

const app = express(); //middleware

const port = 3000;
const hostname = "127.0.0.1";

// ----->> MongoDb Baglantisi Yapilir <<------
mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// ----->> Kullanici Bilgilerini Kaydetme <<-----
const mongoStore = connectMongoo(expressSession);
app.use(
  expressSession({
    secret: "testotesto",
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({ mongooseConnection: mongoose.connection }), //server yenilense bile biligeri kadeder
  })
);
// ---->> Public classi static
app.use(express.static("public"));

// ---->> DISPLAY LINK middleware(Link goruntulenmesi) <<-----
app.use((req, res, next) => {
  const { userId } = req.session;
  if (userId) {
    res.locals = {
      displayLink: true,
    };
  } else {
    res.locals = {
      displayLink: false,
    };
  }
  next(); //devam etmesini soylemelisin
});

// ---->> Router(yonlendirme) <<----
app.use("/auth/register", auth);
app.use("/auth/login", auth);
app.use("/user", user);
app.use("/user/search", user);
app.use("/message/send", message);

// --->> Server‘i calitirmak
app.listen(port, hostname, () => {
  console.log(`Server Calisiyor , http://${hostname}:${port}/`);
});
