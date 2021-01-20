const express = require("express");
const mongoose = require("mongoose");
const connectMongoo = require("connect-mongo");
const dotenv = require("dotenv");
const mainRouter = require("index");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

// Env
dotenv.config({
  path: "./config/config.env",
});

// DB
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

// ---->> Router(yonlendirme) <<----
app.use("/api", mainRouter);

// --->> Server‘i calitirmak
app.listen(port, hostname, () => {
  console.log(`Server Calisiyor , http://${hostname}:${port}/`);
});
