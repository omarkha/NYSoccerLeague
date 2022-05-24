const Club = require('../models/club.model');




  const getClubs = ('/', async (req, res, next) => {
    try{
    const club = await Club.find()
    res.json(club)
  }catch(er){
    res.send(res.status(400).json(err))
  }
});


const findByCityAndName = ('/clubs/city&name/:city/:name', async (req, res) => {
    try{
    const club = await Club.find({'name':req.params.name, 'city':req.params.city})
    res.json(club)
    }catch(e){
      console.log(e)
      res.send('clubs not found!')
    }
  })

 const findByLeague = ('/clubs/league/:league', async (req, res) => {
    try{
      console.log("SELECTED--- " + req.params.league);
      const club = await Club.find({'league': req.params.league})
    
      res.send(JSON.stringify(club))
      }catch(e){
        console.log(e)
        res.send("not worky: "+ e);
      }
    })

    const postClub = ('/clubs', (req, res) => {
        const club = new Club(req.body);
        club.save()
        .then((result) => {
      console.log("Club added!");
        })
        .catch(err => console.log("error: ", err))
      })
    
    const findByName = ('/clubs/name/:name', async (req, res) => {
      try{
        console.log("SELECTED--- " + req.params.name);
        const club = await Club.find({'name': req.params.name})
      
        res.send(JSON.stringify(club))
        }catch(e){
          console.log(e)
          res.send("not worky: "+ e);
        }
      })
      const findByCity =('/clubs/city/:city', async (req, res) => {
        try{
          console.log("SELECTED--- " + req.params.city);
          const club = await Club.find({'city': req.params.city})
        
          res.send(JSON.stringify(club))
          }catch(e){
            console.log(e)
            res.send("not worky: "+ e);
          }
        })

    const deleteById = ('/clubs/:id', async (req, res) => {
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

const updateById = ('/clubs/update/:id', (req, res) => {
  
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



module.exports = {
  getClubs,
  findByCity,
  findByCityAndName,
  findByLeague,
  findByName,
  postClub,
  deleteById,
  updateById
};