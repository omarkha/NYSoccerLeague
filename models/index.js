const mongoose = require('mongoose')
const playerSchema = require('./player.model')
const clubSchema = require('./club.model')
const leagueSchema = require('./league.model')

const League = leagueSchema;
const Club = clubSchema;
const Player = playerSchema;

module.exports = {
  League,
  Club,
  Player
}