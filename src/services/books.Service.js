const booksModel = require('../models/library/books.Schema')

const books = async (req,res)=>{

    try {
      console.log(req.body,"req.body")

      const existingBooks = await booksModel.findOne({ slug: req.body.slug });
      if(existingBooks){
        return {
          status: false,
          error: "Slug already exists.",
        };
      }
        const createBook =  await booksModel.create(req.body);
        console.log(createBook)
        if(createBook)  
        return {   
          status: true,    
          data :  createBook ,  
          message: " book created successfully.",
        };
      } catch (error) {
        console.log(error,"cfvgbnim");  
        return {
          status: false,
          error: "Internal Server Error",
        };
      }
    };

    const findBookByCategory = async (categoryId)=>{
      try {
        const bookByCategory  = await booksModel.find({categoryId});
        if(bookByCategory)
        console.log(bookByCategory)
      return {data :bookByCategory}
      } catch (error) {
        console.log(error,"cfvgbnim");  
        return {
          status: false,
          error: "Internal Server Error"
      }
    }
    }
    const findBook = async (id)=>{
      try {
        const bookDetails  = await booksModel.findById(id);
        if(bookDetails)
        console.log(bookDetails)
      return {data :bookDetails}
      } catch (error) {
        console.log(error,"cfvgbnim");  
        return {
          status: false,
          error: "Internal Server Error"
      }
    }
    }
    module.exports={books,findBookByCategory,findBook}