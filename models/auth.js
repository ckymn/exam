const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// schema olusturulacak dokumanin yapisini belirler
const AuthSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

// olusturulan modeli kullanilabilir hale getirmek
module.exports = mongoose.model("Auth", AuthSchema);
