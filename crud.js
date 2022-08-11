//CREAR
import Book from "./models/Book.js";

const createBook = async () =>{
await Book.create({
    title: 'Harry Potter y la piedra filosofal',
    author: 'J.K. Rowling',
    pages: '500',
    publisher: 'Bloomsbury',
    isbn: '123456789',
    published: new Date(2015, 12, 31)

})
  }
//SCTUSLIZSR
const updateBook = async() => {

    //filtro de busqueda, datos a actualizar ( updateMany -->actualiza todos lo que encuentre con un criterio de busqueda)
   await  Book.updateOne({pages:500,
    isbn:'123456789'},{author:'J.K. Rowling2'})
}


//LEER
const readBook = async () =>{
   // await Book.find // find ById // findOne}
   const books = await Book.find({
    pages:500
   })
   console.log(books);
}

const deleteBook = async ()=>{
    await Book.deleteMany({pages:500})
}
export {createBook, updateBook, readBook,deleteBook}