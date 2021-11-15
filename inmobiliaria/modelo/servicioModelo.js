const express = require("express");
const { createReadStream } = require('fs');
var usuario = require("./users");
var inmueble = require('./inmuebles');

require('../conexionMongo/conexionMongo');

//Creamos instancia de express
const app = new express();

app.use(express.static("./public"));
app.get('/', (req, res) => {
     res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
 
     createReadStream('inmobiliaria/vista/vista.html').pipe(res)

     usuario.find({}, (err, docs) => {
       
        console.log(docs);
        /*  res.send({
            docs: docs 
        }) */
    })
});

app.post("/upload", (req, res) => {
    var myobjUser = {  nombre: req.body.nombre,apellido: req.body.apellido, cedula: req.body.cedula, clave: req.body.clave };
    usuario.collection.insertOne(myobjUser, function (err, res) {
        if (err) throw err;
    });
    console.log("1 usuario insertado");
});

//Abrir puerto del servidor

app.listen(9000, () => {
    console.log("Servidor escuchando por el puerto 9000");
});


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
/* usuario.find({}, (err, docs) => {
    console.log(docs);
}) */

//});

