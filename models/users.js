const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema olusturulacak dokumanin yapisini belirler
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  id: {
    type: Number,
  },
  email: {
    tyep: String,
  },
});

// olusturulan modeli kullanilabilir hale getirmek
module.exports = mongoose.model("User", UserSchema);
