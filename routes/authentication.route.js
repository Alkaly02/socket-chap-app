const express = require('express')
const { loginController, signupController, getAllUsers } = require('../controllers/authentification.controller')
const router = express.Router()

router.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/signup.html')
})
router.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html')
})
router.get('/me', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

router.post('/api/login', loginController)
router.post('/api/signup', signupController)
router.get('/api/users', getAllUsers)

module.exports = router