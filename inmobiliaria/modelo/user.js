
var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme = new mongoose.Schema(
{
      nombre: {
        type: String
      },    
      apellido:{
        type: String
      },
      cedula: {
         type: String
      },
      telefono: {
        type: String
      },
      correo: {
        type: String
      },
      clave: {
        type: String
      }
})
module.exports= mongoose.model('usuario', userscheme)