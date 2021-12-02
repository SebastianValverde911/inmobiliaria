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
require('../conexionMongo/conexionMongo');

var cors = require('cors');
app.use(cors());

app.post("/insertarUsuariow", (req, res) => {
  console.log("Desde el modal");
  /* const num = 9
  var myobj = { nombre: req.body.nombre, apellido: req.body.apellido, cedula: req.body.cedula, tel: req.body.tel, correo: req.body.correo, clave: req.body.clave };
  modelo.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;

  })
  res.send("Usuario creado") */
});

app.post("/insertarInmueblew", (req, res) => {
  //coloco la lógica para insertar un nuevo inmueble
 /*  modeloUbicacion.find({ barrio: 'lopez' }, (err, docs) => {
    var myobj = { nombre: req.body.nombre, tipo: req.body.tipo, imagen: req.body.imagen, ubicacion: docs[0]._id };
    modeloInmueble.collection.insertOne(myobj, function (err, res) {
      if (err) throw err;

    })

    res.send("Inmueble creado")
  }) */
   console.log("Ingreso a insertarInmuebles");
});

app.put("/insertarUsuario",(req, res)=>{
  console.log("Insertar usuario desde el servidor")

  /* const respuesta = {
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    imagen: req.body.imagen,
    ubicacion: req.body.ubicacion
  } */

   
    var myobj = { 
      nombre: req.body.nombre, 
      apellido: req.body.apellido,
      cedula: req.body.cedula,
      telefono: req.body.telefono,
      correo: req.body.correo,
      password: req.body.password
    };

    modelo.collection.insertOne(myobj, function (err, res) {
      if (err) throw err;
    })
    
    const mensaje = {
      mensaje: 'datos de usuario guardados',
      data: myobj
    }

  res.send(JSON.stringify(mensaje));
})

app.put("/insertarInmueble",(req, res)=>{
  console.log("Insertar inmnueble")

  /* const respuesta = {
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    imagen: req.body.imagen,
    ubicacion: req.body.ubicacion
  } */

   
    var myobj = { 
      nombre: req.body.nombre, 
      tipo: req.body.tipo, 
      imagen: req.body.imagen, 
      ubicacion: req.body.ubicacion 
    };

    modeloInmueble.collection.insertOne(myobj, function (err, res) {
      if (err) throw err;
    })
    
    const mensaje = {
      mensaje: 'datos guardados',
      data: myobj
    }

  res.send(JSON.stringify(mensaje));
})

app.put("/insertarUbicacion", (req, res) => {

  var myobj = { 
    zona: req.body.zona, 
    barrio: req.body.barrio};

  modeloUbicacion.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;
  })

   const mensaje = {
      mensaje: 'datos guardados',
      data: myobj
    }

  res.send(JSON.stringify(mensaje));
});


app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })


  createReadStream('inmueble.html').pipe(res)


});

app.get('/consultaInmuebles',(req,res)=>{

  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Authorization', 'X-API-KEY', 'Origin', 'X-Requested-With',' Content-Type', 'Accept', 'Access-Control-Allow','Request-Method');
  res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');

  const datos = {
    nombre:'apartamento',
    zona:'lopez'
  }

  res.end(JSON.stringify(datos));
  
});

app.get('/consultaUsuarios',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Authorization', 'X-API-KEY', 'Origin', 'X-Requested-With',' Content-Type', 'Accept', 'Access-Control-Allow','Request-Method');
  res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');

  const datos = {
    nombre:'Juan',
    apellido:'Valverde'
  }

  res.end(JSON.stringify(datos));
});

app.listen(9000, () => {

  console.log("aplicacion corriendo en el puerto 9000")

});







