require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const sendRoute = require('./routes/sendMessage.route')
const authenticationRoute = require('./routes/authentication.route')

const PORT = process.env.PORT || 7700

// ! mongoDB connect
mongoose.connect('mongodb+srv://alkaly:alkaly2002@cluster0.fpfgbaj.mongodb.net/chat')

app.use(express.json())

app.use('/chat', sendRoute)
app.use('/', authenticationRoute)
app.use('/', (req, res) => {
  res.redirect('/login')
})

// ! socket
io.on('connection', (socket) => {
  console.log('socket io app testing');

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });

  socket.on('send message', (msg) => {
    console.log('message sender: ' + msg);
  });

  socket.on("writing message", (infos) => {
    console.log(infos.message + ' message is sending to ' + infos.selectedUser + ' by ' + infos.sender);
  })
});

server.listen(PORT, () => {
  console.log('server is running on port ', PORT);
})