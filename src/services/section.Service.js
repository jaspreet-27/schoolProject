const sectionModel = require("../models/section.Schema")

const section = async (req,res)=>{

    try {
      console.log(req.body,"req.body")
        const createSection =  await sectionModel.create(req.body);
        console.log(createSection)
        if(createSection )  
        return {
          status: true,    
          data :  createSection ,  
          message: "section created successfully.",
        };
      } catch (error) {
        console.log(error);  
        return {
          status: false,
          error: "Internal Server Error",
        };
      }
    };  

    module.exports ={section}