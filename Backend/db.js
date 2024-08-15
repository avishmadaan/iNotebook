const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/";

async function connectToMongo() {
   let promise = await mongoose.connect(mongoURI);
   console.log("Connect To Mongo Success")
   

   
}


module.exports = connectToMongo;