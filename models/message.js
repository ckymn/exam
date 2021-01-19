const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema olusturulacak dokumanin yapisini belirler
const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});

// olusturulan modeli kullanilabilir hale getirmek
module.exports = mongoose.model("Message", MessageSchema);
