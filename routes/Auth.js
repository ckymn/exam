const express = require('express')
const Auth = require('../models/auth')

const router = express.Router()

router.get('/auth/register', (req, res) => {
  res.send("Register Page")
})

//register
router.post('/auth/register', (req, res) => {
  Auth.create(req.body, (error, user) => {
    req.session.sessionFlash = {
      //session dan gelen mesaji yakaladik sonra login de bastiricaz
      type: 'alert alert-success',
      message: 'Kullanici Basarili Bir Sekilde Olusturuldu'
    }
    res.redirect('/auth/login')
  })
})

router.get('/auth/login', (req, res, next) => {
  res.send("Login Page")
})

// login
router.post('/auth/login', (req, res) => {
  const { email, password } = req.body
  Auth.findOne({ email }, (error, user) => {
    if (user) {
      // bir kullanici var ise
      if (user.password == password) {
        // ----->> USER SESSION
        req.session.userId = user._id //veritabanindaki _id degerini sessionId degerine kaydetmek
        res.redirect('/')
      } else {
        res.redirect('/auth/login')
      }
    } else {
      // eger kullanici yok ise
      res.redirect('/auth/register')
    }
  })
})

// varsa "logout" kisimina yonlendirecegiz
// router.get('/logout', (req, res, next) => {
//   req.session.destroy(() =>{
//     res.redirect('/')
//   })
// })

module.exports = router
