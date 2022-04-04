const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const db = require('./db');
const clubController = require('./controllers/clubControllers.js')
const { League, Club, Player } = require('./models');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001

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

app.get('/players', async (req, res) => {
  try{
  const players =  await Player.find()
  
  res.json(players)
  }catch(e){
    console.log(e)
    res.send('players not found!')
  }
})

app.get('/leagues/:county', async (req, res) => {
  try {
    const { county } = req.params;
    const league =  League.find({county: county})
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

app.post('/players', (req, res) => {
  const player = new Player(req.body);

  player.save()
  .then((result) => {

  })
  .catch(err => console.log("error: ", err))
}
)

app.get('/players/:firstname/:lastname', (req, res) => {


try {
  const data = {
    "name": {
        "firstname": req.params.firstname,
        "lastname": req.params.lastname
    }
    
}; 
  const player =  Player.find(data)
  if (!player) throw Error('id not found')
  res.json(player)
} catch (e) {
  console.log(e)
  res.send('id not found!')
}

});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB connected successfully");
})


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

