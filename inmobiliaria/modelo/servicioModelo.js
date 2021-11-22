const express = require("express");
const { createReadStream } = require('fs')
var modelo = require('./user')
var modeloUbicacion = require('./ubicacion')
var modeloInmueble = require('./inmuebles')
const app = new express();
const HTML_CONTENT_TYPE = 'text/html'
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("./public"));
const path = require("path");
require('../conexionMongo/conexionMongo')

app.post("/insertarUsuario", (req, res) => {
  const num = 9
  var myobj = { nombre: req.body.nombre, apellido: req.body.apellido, cedula: req.body.cedula, tel: req.body.tel, correo: req.body.correo, clave: req.body.clave };
  modelo.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;

  })
  res.send("Usuario creado")
})

app.post("/insertarInmuebles", (req, res) => {
  //coloco la lógica para insertar un nuevo inmueble
  modeloUbicacion.find({ barrio: 'lopez' }, (err, docs) => {
    var myobj = { nombre: req.body.nombre, tipo: req.body.tipo, imagen: req.body.imagen, ubicacion: docs[0]._id };
    modeloInmueble.collection.insertOne(myobj, function (err, res) {
      if (err) throw err;

    })

    res.send("Inmueble creado")
  })

})

app.post("/insertarUbicacion", (req, res) => {

  var myobj = { zona: req.body.zona, barrio: req.body.barrio};
  modeloUbicacion.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;
  })

  res.send("ubicacion guardada")
})


app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })


  createReadStream('inmueble.html').pipe(res)


})

app.listen(9000, () => {

  console.log("aplicacion corriendo en el puerto 9000")

})







