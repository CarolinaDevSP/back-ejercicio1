//MODELOS con moongose

import mongoose from 'mongoose';

/**
 * 1-Esquema
 * 2-Nombre del modelo
 */
//instancia de clase con new
//funciones tienen ()
const schema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    publisher:String,
    isbn: String,
    published: Date,
});
//const name = 'Book';

//const model= mongoose.model('Book', schema);
export default model= mongoose.model('Book', schema);
