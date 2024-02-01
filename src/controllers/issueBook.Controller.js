const issueBookService = require('../services/issueBook.Service')


const issueBooks = async (req,res)=>{
    try {
        console.log("(*&^%$");
        const issueBook = await issueBookService.issueBook(req);
        if (issueBook) {
          console.log(issueBook);
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

module.exports={issueBooks}