const league = require('../models/league.model');


const getLeagues = ('/leagues', (req, res, next) => {
    League.find()
    .then(leagues => res.json(leagues))
    .catch(err => res.status(400).json("Error: " + err));
    next();
});


const postLeague = ('/leagues', (req, res) => {

    const league = new League(req.body);
  
    league.save()
    .then((result) => {
      console.log("league added!");
    })
    .catch(err => console.log("error: ", err))
  });

const findByCounty = ('/leagues/findone/:county', async (req, res) => {
  
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

  
const deleteById = ('/leagues/:id', async (req, res) => {
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
  
  module.exports = {
    getLeagues, postLeague, deleteById, findByCounty
  }