const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema olusturulacak dokumanin yapisini belirler
const MessageSchema = new Schema({
  user: {
    type: ObjectId,
    unique: true,
  },
  text: String,
});

// olusturulan modeli kullanilabilir hale getirmek
module.exports = mongoose.model("Message", MessageSchema);
