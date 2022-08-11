import mongoose from "mongoose";
//import { createBook, deleteBook, readBook, updateBook } from "./crud.js"; 
import { createAuthor, deleteAuthor, readAuthor, updateAuthor } from "./crudAuthor.js"; 
const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to mongodb!! 🟢');
})

db.on('connecting',()=>{
    console.log('connecting to mongodb... 🟡');
})

db.on('disconnected',()=>{
    console.log('disconnected from mongodb...');
})

db.on('error', () => {
    console.log("se conecto mal 🔴");
})

mongoose.connect('mongodb+srv://usuario1:SLr498wp1XyEz7QH@cluster0.zvycjid.mongodb.net/?retryWrites=true&w=majority', async() =>{
    console.log('callback de funcion cocnnect');
    try {
        //mandamos a llamar createBook, update, read, delete
   /* await createBook();
   await updateBook();
   await readBook();
   await deleteBook();*/
   await createAuthor();
   await updateAuthor();
   await readAuthor();
   //await deleteAuthor();
    } catch (error) {
        console.log('ocurrio un error', error);
    }
});

