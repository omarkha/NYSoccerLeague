const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const clubController = require('./controllers/clubControllers.js');
const { League, Club, Player } = require('./models');
const morgan = require('morgan');
const res = require('express/lib/response');
const path = require("path");
const leagueRoutes = require("./routes/leagues");

const PORT = process.env.PORT || 3001;

const app = express();


__dirname = path.resolve();



app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))
app.use(express.urlencoded({ extended: false }))
app.use(leagueRoutes);

require('dotenv').config() // Add this line

let dbUrl = process.env.NODE_ENV === 'production' ? "mongodb+srv://Copyres:Soridl846@cluster0.ohmco.mongodb.net/test?retryWrites=true&w=majority" : 'mongodb://127.0.0.1:27017/test'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection;



// await Leagie.find




app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

