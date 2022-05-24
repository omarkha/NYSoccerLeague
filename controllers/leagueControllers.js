const league = require('../models/league.model');


const getLeagues = ('/leagues', async  (req, res) => {
    
    try{
      const lig = await league.find()
      res.json(lig);
    }catch(err){
      res.send("err " + err);
    }
});


const postLeague = ('/leagues', (req, res) => {

    const lig = new league(req.body);
  
    lig.save()
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
      const lig = await league.find({county: county_encode})
      if (!lig) throw Error('couty not found')
      res.json(lig)
    } catch (e) {
      console.log(e)
      res.send('county not found!')
    }
  })

  
const deleteById = ('/leagues/:id', async (req, res) => {
    try {
  
      const id = req.params.id;
      const lig = await league.findByIdAndRemove(id)
      if (!lig) throw Error('couty not found')
      res.json(lig)
    } catch (e) {
      console.log(e)
      res.send('county not found!')
    }
  })
  
  module.exports = {
    getLeagues, postLeague, deleteById, findByCounty
  }