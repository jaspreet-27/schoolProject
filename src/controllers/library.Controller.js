const libraryService  = require('../services/library.Service')

const createLibrary = async (req,res)=>{
    try {
        console.log("(*&^%$");
        const library = await libraryService.library(req);
        if (library) {
          console.log(library);
          return res.send({
            status: 201,
            data: library,
            
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

module.exports = {createLibrary}