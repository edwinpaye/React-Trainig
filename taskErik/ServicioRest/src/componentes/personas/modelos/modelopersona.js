
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = Schema({
    name: String,
    lastName: String,
    edad: String
})

module.exports = mongoose.model('persona', PersonaSchema);