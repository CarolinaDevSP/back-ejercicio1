import mongoose from "mongoose";
import Book from "./models/Book.js";

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

mongoose.connect('mongodb://localhost:27017/test', () =>{
    console.log('callback de funcion cocnnect');
    /**
     * 1- crear un libro 
     * 2- actualizar libro
     * 3- leer libro
     * 4- borrar libro
     */
    //modelo que creamos book, book es un obj de js
    Book.create({
        title: 'Harry Potter y la piedra filosofal',
        author: 'J.K. Rowling',
        pages: '500',
        publisher: 'Bloomsbury',
        isbn: '123456789',
        published: new Date(2015, 12, 31)


    })
});
