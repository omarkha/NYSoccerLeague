const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const clubController = require('./controllers/clubControllers.js');
const { League, Club, Player } = require('./models');
const morgan = require('morgan');
const res = require('express/lib/response');
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();


__dirname = path.resolve();



app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))
app.use(express.urlencoded({ extended: false }))



require('dotenv').config() // Add this line

let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/test'

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

app.get('/leagues', async (req, res) => {
  try{
  const leagues = await League.find()
  res.json(leagues)
  }catch(e){
    console.log(e)
    res.send('leagues not found!')
  }
})

app.get('/clubs/city&name/:city/:name', async (req, res) => {
  try{
  const club = await Club.find({'name':req.params.name, 'city':req.params.city})
  res.json(club)
  }catch(e){
    console.log(e)
    res.send('clubs not found!')
  }
})

app.get('/players', async (req, res) => {
  try{
  const players = await Player.find()
  res.json(players)
  }catch(e){
    console.log(e)
    res.send('leagues not found!')
  }
})


app.get('/players/:club', async (req, res) => {
  try{
  const players = await Player.find({club: req.params.club})
  res.send(JSON.stringify(players))
  }catch(e){
    console.log(e)
    res.send('leagues not found!')
  }
})

app.get('/players/:firstname/:lastname', async (req, res) => {
  try{
  const players = await Player.find({firstname: req.params.firstname, lastname:req.params.lastname})
  res.send(JSON.stringify(players))
  }catch(e){
    console.log(e)
    res.send('leagues not found!')
  }
})

app.get('/players/lastname/:lastname', async (req, res) => {
  try{
  const players = await Player.find({lastname:req.params.lastname})
  res.send(JSON.stringify(players))
  }catch(e){
    console.log(e)
    res.send('leagues not found!')
  }
})

app.get('/players/firstname/:firstname', async (req, res) => {
  try{
  const players = await Player.find({firstname: req.params.firstname})
  res.send(JSON.stringify(players))
  }catch(e){
    console.log(e)
    res.send('leagues not found!')
  }
})

app.get('/clubs/league/:league', async (req, res) => {
try{
  console.log("SELECTED--- " + req.params.league);
  const club = await Club.find({'league': req.params.league})

  res.send(JSON.stringify(club))
  }catch(e){
    console.log(e)
    res.send("not worky: "+ e);
  }
})

app.get('/clubs/name/:name', async (req, res) => {
  try{
    console.log("SELECTED--- " + req.params.name);
    const club = await Club.find({'name': req.params.name})
  
    res.send(JSON.stringify(club))
    }catch(e){
      console.log(e)
      res.send("not worky: "+ e);
    }
  })
  app.get('/clubs/city/:city', async (req, res) => {
    try{
      console.log("SELECTED--- " + req.params.city);
      const club = await Club.find({'city': req.params.city})
    
      res.send(JSON.stringify(club))
      }catch(e){
        console.log(e)
        res.send("not worky: "+ e);
      }
    })

app.delete('/players/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const player = await Player.findByIdAndRemove(id)
    if (!player) throw Error('couty not found')
    res.json(player)
  } catch (e) {
    console.log(e)
    res.send('player not found!')
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

app.get('/leagues/findone/:county', async (req, res) => {
  
  try {
    const county_encode = req.params.county;
    county_encode.replace("&20", " ");
    console.log(county_encode);
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

app.put('/players/update/:id', (req, res) => {
  
  const newFirstname = req.body.newFirstname
  const newLastname = req.body.newLastname;
  const newCounty = req.body.newCounty;
  const newClub = req.body.newClub;
  const newAge = req.body.newAge;
  const newPosition = req.body.newPosition;
  const newWeight = req.body.newWeight;
  const newHeight = req.body.newHeight;
  const newEmail = req.body.newEmail;
  const newPhone = req.body.newPhone;
  const newFoot = req.body.newFoot;
  const id = req.params.id;

try{
   Player.findById(id, (err, newPlayer) => {
    newPlayer.firstname = newFirstname;
    newPlayer.lastname = newLastname;
    newPlayer.county = newCounty;
    newPlayer.club = newClub;
    newPlayer.age = newAge;
    newPlayer.position = newPosition;
    newPlayer.weight = newWeight;
    newPlayer.height = newHeight;
    newPlayer.email = newEmail;
    newPlayer.phone = newPhone;
    newPlayer.foot = newFoot;
    newPlayer.save();
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

app.post('/players', (req, res) => {
  const player = new Player(req.body);
  player.save()
  .then((result) => {
      console.log("Club added!");
  })
  .catch(err => console.log("error: ", err))
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

