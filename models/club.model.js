
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {type: String, required: true, unique: true},
    county: {type: String, required: true},
    city: {type: String, required: true, unique: true},
    league: {type: String, ref: "League"},
    img_url: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    

}, {timestamps: true});
s
const Club = mongoose.model('Club', clubSchema);



module.exports = Club;
