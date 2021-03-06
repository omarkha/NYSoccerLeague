
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    county: {type: String, required: true, unique: true}
}, {timestamps: true});

const League = mongoose.model('League', leagueSchema);

module.exports = League;