var mongoose = require('mongoose');
//set up default mongoose connection
const userscheme = new mongoose.Schema({
    apellido:{
        type: String
    },
    cedula: {
        type: String
    },
    nombre: {
        type: String
    },
    clave: {
        type: String
    }
});

module.exports = mongoose.model('users',userscheme);