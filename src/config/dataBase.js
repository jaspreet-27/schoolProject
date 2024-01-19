
const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");

mongoose.connect(process.env.dataBase).
then(()=>{
    console.log("connected to db")
}).catch((error)=>{
    console.log(error)
});