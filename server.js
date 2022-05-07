const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./db');
const clubController = require('./controllers/clubControllers.js');
const { League, Club } = require('./models');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  res.send("You're a wizard, Harry!")
})

// await Leagie.find

app.get('/leagues', async (req, res) => {
  try{
  const leagues = await League.find()
  res.json(leagues)
  }catch(e){
    console.log(e)
    res.send('leagues not found!')
  }
})

app.get('/clubs', async (req, res) => {
  try{
  const club = await Club.find()
  res.json(club)
  }catch(e){
    console.log(e)
    res.send('clubs not found!')
  }
})


app.delete('/leagues/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const league = await League.findByIdAndRemove(id)
    if (!league) throw Error('couty not found')
    res.json(league)
  } catch (e) {
    console.log(e)
    res.send('county not found!')
  }
})

app.get('/leagues/getone/:county', async (req, res) => {
  
  try {
    const county_encode = req.params.county;
    county.replace("&20", " ");
    console.log(county);
    const league = await League.find({county: county_encode})
    if (!league) throw Error('couty not found')
    res.json(league)
  } catch (e) {
    console.log(e)
    res.send('county not found!')
  }
})



app.post('/leagues', (req, res) => {

  const league = new League(req.body);

  league.save()
  .then((result) => {
    console.log("league added!");
  })
  .catch(err => console.log("error: ", err))
});

app.post('/clubs', (req, res) => {
  const club = new Club(req.body);
  club.save()
  .then((result) => {
console.log("Club added!");
  })
  .catch(err => console.log("error: ", err))
}
)


const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB connected successfully");
})


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

