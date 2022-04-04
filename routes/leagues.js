const router = require('express').Router();
let League = require('../models/league.model');

router.route('/').get((req, res, next) => {
    League.find()
    .then(leagues => res.json(leagues))
    .catch(err => res.status(400).json("Error: " + err));
    next();
});

router.route('/:id').get((req, res, next) => {
    League.findById(req.params.id)
    .then(league => res.json(league))
    .catch(err => res.status(400).json("Error: " + err));
    next();
}); 

router.route('/:id').delete((req, res, next) => {
    League.findByIdAndDelete(req.params.id)
    .then(league => res.json(league))
    .catch(err => res.status(400).json("Error: " + err));
    next();
}); 

router.route('/add').post((req, res, next) => {

    const county = req.body.county;

    const newLeauge = new League({
        county
    });

    newLeague.save()
    .then(() => res.json("League Added!"))
    .catch(err => res.status(400).json('Error: ' + err));
    next();
});

module.exports = router;