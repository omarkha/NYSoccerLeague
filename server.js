const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const morgan = require('morgan');
const res = require('express/lib/response');
const path = require("path");

const leagueRoutes = require("./routes/leagues");
const clubRoutes = require("./routes/clubs");
const playerRoutes = require("./routes/players");

const PORT = process.env.PORT || 3001;

const app = express();


__dirname = path.resolve();



app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))
app.use(express.urlencoded({ extended: false }))
app.use(leagueRoutes);
app.use(clubRoutes);
app.use(playerRoutes);

require('dotenv').config() // Add this line

let dbUrl = process.env.NODE_ENV === 'production' ? `mongodb+srv://${"Copyres"}:${"#Soridl846"}@cluster0.ohmco.mongodb.net/test?retryWrites=true&w=majority` : 'mongodb://127.0.0.1:27017/test'

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


////////// 

app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search.expression('folder:soccerleague')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();
  const publicIds = resources.map(file => file.public_id)
})

const cloudinary = require('cloudinary');
cloudinary.config(
  {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  }
)
app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'soccerleague'
    })
    console.log(uploadedResponse)
    res.json({ msg: "gucci" })

  } catch (err) {
    console.log(err);
  }

})
//////////

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

