const issueBookService = require('../services/issueBook.Service')


const issueBooks = async (req,res)=>{
    try {
        console.log("(*&^%$");
        const issueBook = await issueBookService.issueBook(req);
        // console.log(req.body,"erctvybunimo");
        if (issueBook) {
          // console.log(issueBook,"erctvybunimo");
          return res.send({
            status: 200,
            data: issueBook,
            
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