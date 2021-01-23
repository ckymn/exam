const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log("MongoDb connection is Succesfull !");
    })
    .catch((err) => {
      console.error("MonogDb baglantisi hatasi:", err);
    });
};

module.exports = connectDatabase;
