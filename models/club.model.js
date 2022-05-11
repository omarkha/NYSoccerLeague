
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {type: String, required: true, unique: true},
    county: {type: String, required: true},
    city: {type: String, required: true},
    league: {type: String, ref: "League"},

}, {timestamps: true});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;