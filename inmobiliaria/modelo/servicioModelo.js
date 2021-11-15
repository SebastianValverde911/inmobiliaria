var usuario = require("./users");
var inmueble = require('./inmuebles');

require('../conexionMongo/conexionMongo');



/* function insertarInmueble() {
    var myobjInmueble = {nombre:"casa cuarta", tipo:"apartamento",imagen:"ruta/imagen2.png"};
    inmueble.collection.insertOne(myobjInmueble, function(err,res) {
        if(err) throw err;
        console.log("1 inmueble insertado");
    });
} */

//app.post("/",(req,res) => {

//Codigo funciona para insertar
/*
var myobjUser = {apellido:"ortiz",cedula:"321584",nombre:"isabella",clave:"123"};
usuario.collection.insertOne(myobjUser, function(err,res) {
    if(err) throw err;
    console.log("1 usuario insertado");
});*/

//Se trae la info de la collection de usuarios
usuario.find({},(err,docs)=>{
    console.log(docs);
})


//});

