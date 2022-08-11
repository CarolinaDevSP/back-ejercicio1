//CREAR
import Author from "./models/Author.js";

const createAuthor = async () =>{
await Author.create({
    name: 'Gabriel ',
    lastname: 'Garcia Marquez',
    nationality: 'Colombia',
    age: 45,
    genero: 'novela',

})
  }
//SCTUSLIZSR
const updateAuthor = async() => {

    //filtro de busqueda, datos a actualizar ( updateMany -->actualiza todos lo que encuentre con un criterio de busqueda)
   await  Author.updateOne({age:45,
    nationality:'Mexico'},{name:'J.K. Rowling2'})
}


//LEER
const readAuthor = async () =>{
   // await Author.find // find ById // findOne}
   const Authors = await Author.find({
    age:45
   })
   console.log(Authors);
}

const deleteAuthor = async ()=>{
    await Author.deleteMany({age:45})
}
export {createAuthor, updateAuthor, readAuthor,deleteAuthor}