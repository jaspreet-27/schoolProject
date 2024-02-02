const libraryModel = require('../models/library/library.Schema')

const library = async (req,res)=>{
    try {
      console.log(req.body,"req.body")

      const existingLibrary = await libraryModel.findOne({ slug: req.body.slug });
      if(existingLibrary){
        return {
          status: false,
          error: "Slug already exists.",
        };
      }
        const library =  await libraryModel.create(req.body);
        console.log(library)
        if(library)  
        return {   
          status: true,    
          data :  library ,  
          message: " library created successfully.",
        };
      } catch (error) {
        console.log(error,"cfvgbnim");  
        return {
          status: false,
          error: "Internal Server Error",
        };
      }
    }; 
    
    const findLibraryDetails = async (req,res)=>{
      try {
       const find = await libraryModel.find({});
        if (find)
        console.log(find,"tyuijb")
     return{
      data : find
     }
            
      } catch (error) {
        console.log(error,"cfvgbnim");  
        return {
          status: false,
          error: "Internal Server Error"
      }
      }}

      const findLibrary = async (schoolId)=>{
        try {
          const find = await libraryModel.find({schoolId});
          if(find)
          console.log(find)
        return {data :find}
        } catch (error) {
          console.log(error,"cfvgbnim");  
          return {
            status: false,
            error: "Internal Server Error"
        }
      }
    }
    module.exports ={library,findLibraryDetails,findLibrary}