const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name : {    firstname: {type: String, required: true},
                lastname: {type: String, required: true}
}   ,
    age: {type: Number, required: true},
    club: {type: String, required: true},
    foot: {type: String, required: true},
    position: {type: String, required: true},
    height: {type: String, reuqired: true},
    weight: {type: String, required: true},
    county: {type: String, required: true},
    city: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    player_id: { type: Schema.Types.ObjectId, ref: 'player_id' }
}, {timestamps: true});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;