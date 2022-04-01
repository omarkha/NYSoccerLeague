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

router.route('/:id').get((req, res => {
    Player.findById(req.params.id)
    .then(() => res.json(player))
    .catch(error => res.status(400).json('Error: ' + error));
}));

router.route('/:id').delete((req, res => {
    Player.findById(req.params.id)
    .then(() => res.json('player deleted!'))
    .catch(error => res.status(400).json('Error: ' + error));
}));

router.route('update/:id').post((req, res => {
    Player.findById(req.params.id)
    .then(player => {
        player.firstname = req.body.firstname;
        player.lastname = req.body.lastname;
        player.county = req.body.county;
        player.city = req.body.city;
        player.club = req.body.club;
        player.foot = req.body.foot;
        player.age = Number(req.body.age);
        player.weight = req.body.weight;
        player.height = req.body.height;
        player.position = req.body.position;
        player.email = req.body.email;
        player.phone = req.body.phone;
    })
    .catch(error => res.status(400).json('Error: ' + error));
}));

module.exports = router;