const express = require('express')
const { loginController, signupController } = require('../controllers/authentification.controller')
const router = express.Router()

router.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html')
})

router.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/signup.html')
})

router.post('/api/login', loginController)

router.post('/api/signup', signupController)

module.exports = router