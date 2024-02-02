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

const findByCategoryId = async (req,res)=>{
  const { categoryId: _id } = req.params.id;
  try {
    const find = await bookService.findBookByCategory(req.params.id);
    if (find) {
      res.send({
        book: find,  
        staus: 200,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
const bookDetails = async (req,res)=>{
  const { id: _id } = req.params.id;
  try {
    const find = await bookService.findBook(req.params.id);
    if (find) {
      res.send({
        book: find,  
        staus: 200,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {createBooks,findByCategoryId,bookDetails}