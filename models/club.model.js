
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {type: String, required: true},
    city: {type:String, required: true},
    manager: {type:String, required: true}
}, {timestamps: true});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;