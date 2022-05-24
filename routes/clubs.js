const router = require('express').Router();
let Club = require('../models/club.model');

router.route('/').get((req, res, next) => {
    Club.find()
    .then(clubs => res.json(clubs))
    .catch(err => res.status(400).json("Error: " + err));
    next();
});


rapp.get('/clubs/city&name/:city/:name', async (req, res) => {
    try{
    const club = await Club.find({'name':req.params.name, 'city':req.params.city})
    res.json(club)
    }catch(e){
      console.log(e)
      res.send('clubs not found!')
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
    
    app.post('/clubs', (req, res) => {
        const club = new Club(req.body);
        club.save()
        .then((result) => {
      console.log("Club added!");
        })
        .catch(err => console.log("error: ", err))
      }
      )
    
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

module.exports = router;