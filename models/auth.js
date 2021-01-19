const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

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

AuthSchema.jwtToken = function () {
  const jwt_scret = merhababenmuhammet;
  const jwt_expire = 10;
  const payload = {
    id: this._id,
    name: this.name,
  };

  const token = jwt.sign(payload, jwt_scret, {
    expiresIn: jwt_expire,
  });
  return token;
};
// olusturulan modeli kullanilabilir hale getirmek
module.exports = mongoose.model("Auth", AuthSchema);
