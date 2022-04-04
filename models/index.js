const mongoose = require('mongoose')
const clubSchema = require('./club.model')
const leagueSchema = require('./league.model')

const League = leagueSchema;
const Club = clubSchema;


module.exports = {
  League,
  Club,
}