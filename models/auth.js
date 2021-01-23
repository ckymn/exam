const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const AuthUserSchema = new Schema({
  username: {
    type: String,
    require: [true, "username alani zorunlugudur !"],
  },
  email: {
    type: String,
    require: [true, "email alani zorunludur !"],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "email standartlarina uygun olmalidir !",
    ],
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  password: {
    type: String,
    minlength: [6, "en az 6 karakterli olmalidir"],
    require: [true, "password alani zorunludur !"],
    unique: true,
    select: false,
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

// veri tabaninda AuthUsers adinda bir colleciton olusacak
module.exports = mongoose.model("AuthUser", AuthUserSchema);
