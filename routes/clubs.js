const router = require('express').Router();
let Club = require('../models/club.model');

router.route('/').get((req, res, next) => {
    Club.find()
    .then(clubs => res.json(clubs))
    .catch(err => res.status(400).json("Error: " + err));
    next();
});

router.route('/:id').get((req, res, next) => {
    Club.findById(req.params.id)
    .then(club => res.json(club))
    .catch(err => res.status(400).json("Error: " + err));
    next();
}); 

router.route('/:id').delete((req, res, next) => {
    Club.findByIdAndDelete(req.params.id)
    .then(clubs => res.json(clubs))
    .catch(err => res.status(400).json("Error: " + err));
    next();
}); 

router.route('/add').post((req, res, next) => {

    const name = req.body.name;
    const county = req.body.county;
    const city = req.body.city;

    const newClub = new Club({
        name, county, city
    });

    newClub.save()
    .then(() => res.json("Club Added!"))
    .catch(err => res.status(400).json('Error: ' + err));
    next();
});

module.exports = router;