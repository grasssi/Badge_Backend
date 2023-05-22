const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const efccmSchema = new Schema({
    //emt: { type: String, required: true },
    code_payes: { type: String, required: true },
    emt: { type: String, required: false },
    toc: { type: String, required: false },
    vcontext: { type: String, required: false },
    codage: { type: String},

}, {
    versionKey: false,
    timestamps: true
});

efccmSchema.plugin(uniqueValidator)
const Effcm = mongoose.model('effcm', efccmSchema);

module.exports = Effcm;