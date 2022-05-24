const router = require('express').Router();
let League = require('../models/league.model');
const leagueController = require('../controllers/leagueControllers.js');
const mongoose = require('mongoose');

router.post('/leagues', leagueController.postLeague);
router.get('/leagues', leagueController.getLeagues);
router.get('/leagues/findbycounty/:county', leagueController.findByCounty);
router.delete('/leagues/:id', leagueController.deleteById);

module.exports = router;