const router = require('express').Router();
let Player = require('../models/player.model');
const playerController = require('../controllers/playerControllers');
const mongoose = require('mongoose');

router.post('/players', playerController.postPlayer);
router.get('/players', playerController.getPlayers);
router.get('/players/:club', playerController.getByClub);
router.get('/players/:firstname/:lastname', playerController.getByFirstAndLastName);
router.get('/players/firstname/:firstname', playerController.getByFirstname);
router.get('/players/lastname/:lastname', playerController.getByLastname);
router.delete('/players/:id', playerController.deleteById);
router.put('/players/update/:id', playerController.updateById);
  
module.exports = router;

