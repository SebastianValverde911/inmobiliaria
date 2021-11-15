var mongoose = require('mongoose');
const MONGO_URL = "mongodb+srv://root:Seguridad1234@inmobiliaria.vkw0q.mongodb.net/inmobiliaria?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true}).then(()=>{
    console.log("mongodb is connected");
}).catch((error) =>{
    console.log("mongodb not connected");
    console.log(error);
});