
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    position: {type: String, required: true},
    foot: {type: String, required: true},
    club: {type: String, required: true},
    county: {type: String, required: true},
    city: {type: String, required: true},
    height: {type: String, required: true},
    weight: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
}, {timestamps: true});

const League = mongoose.model('Player', playerSchema);

module.exports = League;
