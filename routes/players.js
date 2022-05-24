const router = require('express').Router();
let Player = require('../models/player.model');

router.route('/').get((req, res) => {
    Player.find()
    .then(players => res.json(players))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = Number(req.body.age);
    const club = req.body.club;
    const position = req.body.position;
    const foot = req.body.foot;
    const height = req.body.height;
    const weight = req.body.weight;
    const county = req.body.county;
    const city = req.body.city;
    const email = req.body.email;
    const phone = req.body.phone;

    const newPlayer = new Player({
        firstname,
        lastname,
        age,
        club,
        position,
        foot,
        height,
        weight,
        county,
        city,
        email,
        phone

    });
    newPlayer.save()
    .then(() => res.json("Player Added!"))
    .catch(err => res.status(400).json('Error: ' + err));
});


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

  app.post('/players', (req, res) => {
    const player = new Player(req.body);
    player.save()
    .then((result) => {
        console.log("Club added!");
    })
    .catch(err => console.log("error: ", err))
  })
  
  
module.exports = router;