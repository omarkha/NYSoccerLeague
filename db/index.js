const mongoose = require('mongoose');


let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb+srv://Copyres:Soridl846@cluster0.ohmco.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection;

module.exports = db