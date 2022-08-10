import mongoose from "mongoose";

const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to mongodb!! ');
})

db.on('connecting',()=>{
    console.log('connecting to mongodb...');
})

db.on('disconnected',()=>{
    console.log('disconnected from mongodb...');
})

db.on('error', () => {
    console.log("se conecto mal");
})

mongoose.connect('mongodb://localhost:27017/test');