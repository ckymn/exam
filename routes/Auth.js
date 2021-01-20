const express = require("express");
const Auth = require("../models/auth");

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("api/auth/register");
});

router.get("/login", (req, res, next) => {
  res.send("api/auth/login");
});

//register
router.post("/register", (req, res) => {
  Auth.create(req.body, (error, user) => {
    _id, username, email;
  });

  const token = Auth.jwtToken();
  console.log(token);
  res.status(200).json({
    succes: true,
    data: Auth,
  });
});

// login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Auth.findOne({ email }, (error, user) => {
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
});

//logout
router.get("/logout", (req, res, next) => {
  res.send("api/auth/logout");
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
