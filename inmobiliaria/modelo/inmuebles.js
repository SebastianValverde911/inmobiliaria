var mongoose = require('mongoose');
//set up default mongoose connection
const inmueblescheme = new mongoose.Schema({
    nombre:{
        type: String
    },
    tipo: {
        type: String
    },
    imagen: {
        type: String
    },
    ubicacion: {
        type: String
    }
});

module.exports = mongoose.model('inmuebles',inmueblescheme);