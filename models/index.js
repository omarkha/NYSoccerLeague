const mongoose = require('mongoose')
const playerSchema = require('./player')
const clubSchema = require('./club')

const Club = mongoose.model('Book', clubSchema)
const Player = mongoose.model('Publisher', playerSchema)

module.exports = {
  Club,
  Player
}