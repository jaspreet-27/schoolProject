const bookService = require('../services/books.Service')

const createBooks = async (req,res)=>{
    try {
        console.log("(*&^%$");
        const createBook = await bookService.books(req);
        if (createBook) {
          console.log(createBook);
          return res.send({
            status: 200,
            data: createBook,
            
          });
        } else {
          res.send({
            status: 500,
            message: "not created",
          });
        }
      } catch (error) {
        console.log(error);
        res.send({
          status: 500,
          error: "internal error",
        });
      }
}
module.exports = {createBooks}