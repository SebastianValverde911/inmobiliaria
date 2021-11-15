var mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://root:Seguridad1234@inmobiliaria.vkw0q.mongodb.net/inmobiliaria?retryWrites=true&w=majority";

var modelo = require('../modelo/users');

const express = require("express");
const { createReadStream } = require('fs');

//Creamos instancia de express
const app = new express();

app.get('/', (req, res) => {
    /*  res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
 
     createReadStream('inmobiliaria/index.html').pipe(res) */

    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("mongodb is connected");
    }).catch((error) => {
        console.log("mongodb not connected");
        console.log(error);
    });
    modelo.find({}, (err, docs) => {
        res.send({
            docs: docs 
        })
    })
});


//Abrir puerto del servidor

app.listen(9000, () => {
    console.log("Servidor escuchando por el puerto 9000");
});
