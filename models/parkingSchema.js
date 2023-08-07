const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const parkingSchema = new Schema({
    nom: { type: String},
    efccm:[{type:Schema.Types.ObjectId,ref:'effcm'}]


}, {
    versionKey: false,
    timestamps: true
});

// badgeSchema.plugin(uniqueValidator)
const Parking = mongoose.model('parking', parkingSchema);

module.exports = Parking;