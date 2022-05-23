import { connect, set, connection } from 'mongoose';

require('dotenv').config() // Add this line

let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/test'

connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
set('debug', true)
const db = connection;

export default db;