// const bookCategoryModel =require('../models/library/categoryOfBook.Schema')
const bookCategoryService = require('../services/bookCategory.Service')

const createBookCategory = async(req,res)=>{
    try {
        console.log("(*&^%$");
        const category = await bookCategoryService.category(req);
        if (category) {
          console.log(category);
          return res.send({
            status: 200,
            data: category,
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

module.exports={createBookCategory}