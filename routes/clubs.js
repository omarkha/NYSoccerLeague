const router = require('express').Router();
let Club = require('../models/club.model');

router.route('/').get((req, res) => {
    Club.find()
    .then(clubs => res.json(clubs))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newClub = new Club({
        name
    });

    newClub.save()
    .then(() => res.json("Club Added!"))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;