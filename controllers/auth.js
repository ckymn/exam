const Auth = require("../models/auth");

const authPost_register = async (req, res) => {
  await Auth.create(req.body, (error, user) => {
    _id, username, email;
  });

  const token = await Auth.jwtToken();
  console.log(token);
  res.status(200).json({
    succes: true,
    data: Auth,
  });
};

const authPost_login = async (req, res) => {
  const { email, password } = req.body;
  await Auth.findOne({ email }, (error, user) => {
    if (user) {
      // bir kullanici var ise
      if (user.password == password) {
        // ----->> USER SESSION
        req.session.userId = user._id; //veritabanindaki _id degerini sessionId degerine kaydetmek
        res.redirect("/");
      } else {
        res.redirect("/auth/login");
      }
    } else {
      // eger kullanici yok ise
      res.redirect("/auth/register");
    }
  });
};

const authGet_logout = async (req, res, next) => {
  res.send("api/auth/logout");
  await req.session.destroy(() => {
    res.redirect("/");
  });
};

module.exports = {
  authPost_register,
  authPost_login,
  authGet_logout,
};
