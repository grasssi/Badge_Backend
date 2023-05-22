const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const badgeSchema = new Schema({
    emt: { type: String, required: true },
    modele: { type: String, required: true },
    code_fab: { type: String, required: false },
    classe_equipement: { type: String, required: false },
    codage: { type: String},

}, {
    versionKey: false,
    timestamps: true
});

badgeSchema.plugin(uniqueValidator)
const Badge = mongoose.model('badge', badgeSchema);

module.exports = Badge;