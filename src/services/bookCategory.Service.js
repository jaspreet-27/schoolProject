const bookCategoryModel =require('../models/library/categoryOfBook.Schema')

const category= async (req,res)=>{

    try {
      console.log(req.body,"req.body")

      const existingBookCategory = await bookCategoryModel.findOne({ slug: req.body.slug });
      if(existingBookCategory){
        return {
          status: false,
          error: "Slug already exists.",
        };
      }
        const createBookCategory =  await bookCategoryModel.create(req.body);
        console.log(createBookCategory)
        if(createBookCategory)  
        return {   
          status: true,    
          data : createBookCategory ,  
          message: "book category created successfully.",
        };
      } catch (error) {
        console.log(error);  
        return {
          status: false,
          error: "Internal Server Error",
        };
      }
    };

    module.exports ={category}