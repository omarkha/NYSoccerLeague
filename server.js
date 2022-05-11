const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./db');
const clubController = require('./controllers/clubControllers.js');
const { League, Club } = require('./models');
const morgan = require('morgan');
const res = require('express/lib/response');

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

app.get('/clubs/:league', async (req, res) => {
try{
  const club = await Club.find({"league": req.params.league})

  res.send(JSON.stringify(club))
  }catch(e){
    console.log(e)
    res.send("not worky: "+ e);
  }
})

app.delete('/clubs/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const club = await Club.findByIdAndRemove(id)
    if (!club) throw Error('club not found')
    res.json(club)
  } catch (e) {
    console.log(e)
    res.send('clubb not found!')
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

app.put('/clubs/update/:id', (req, res) => {
  
    const newName = req.body.newName;
    const newCity = req.body.newCity;
    const newCounty = req.body.newCounty;
    const newLeague = req.body.newLeague + " ASL";
  const id = req.params.id;
  try{
     Club.findById(id, (err, newClub) => {
      newClub.name = newName;
      newClub.city = newCity;
      newClub.league = newLeague;
      newClub.county = newCounty;
      newClub.save();
      res.send("updated");
    })
  }catch(e){
    console.log(e);
    res.send("worky.. not");
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

