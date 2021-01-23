const Auth = require("../models/auth");

// kullanici kayit fonksiyonu post request olunca calisacak
const authPost_register = async (req, res) => {
  //POST DATA
  const username = "Muhammet Cokyaman";
  const email = "mami@gmail.com";
  const password = "123455";

  const user = await Auth.create({
    username,
    email,
    password,
  });

  res.status(400).json({
    succes: true,
    data: user,
  });

  const token = await Auth.jwtToken();
  console.log(token);
  res.status(200).json({
    succes: true,
    data: Auth,
  });
};

const authPost_login = await Auth.findOne(email, (error, user) => {
  // bir kullanici var ise
  if (user) {
    if (user.password === password) {
      req.session.userId = user._id;
      res.redirect("/");
    } else {
      res.redirect("/auth/login");
    }
  } else {
    // eger kullanici yok ise
    res.redirect("/auth/register");
  }
});

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
