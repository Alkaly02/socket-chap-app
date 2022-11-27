const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://alkaly:alkaly2002@cluster0.fpfgbaj.mongodb.net/chat')

module.export = connection