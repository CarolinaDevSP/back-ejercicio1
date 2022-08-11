//MODELOS con moongose

import mongoose from 'mongoose';

/**
 * 1-Esquema
 * 2-Nombre del modelo
 */
//instancia de clase con new
//funciones tienen ()
const schema = new mongoose.Schema({
    name:String,
    lastname:String,
    nationality:String,
    age:Number,
    genero:String,

});


//const model= mongoose.model('Book', schema);
export default mongoose.model('Author', schema);
