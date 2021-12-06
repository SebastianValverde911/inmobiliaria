const { ObjectId } = require('bson');
var mongoose = require('mongoose');

const inmobiliariaEsquema = new mongoose.Schema({
    nombre: {
        type: String
    },
    tipo: {
        type: String
    },
    imagen: {
        type: String
    },
    ubicacion: {
        /* type: ObjectId */
        type: String
    }
})
module.exports = mongoose.model('inmuebles', inmobiliariaEsquema)