const express = require('express')
const router = express.Router()

router.get('/send', (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + '/views/index.html')
})

module.exports = router
