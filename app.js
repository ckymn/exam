const express = require("express");
const connectDb = require("./helpers/connect.db");
const dotenv = require("dotenv");
const mainRouter = require("index");
const customError = require("./middleware/custom.error");
const app = express();
const port = process.env.PORT;

// Env
dotenv.config({
  path: "./config/config.env",
});

// DB
connectDb();

//Router
app.use("/api", mainRouter);

//Error
app.use(customError);

// --->> Server‘i calitirmak
app.listen(port, hostname, () => {
  console.log(`Server Calisiyor , ${port}`);
});
