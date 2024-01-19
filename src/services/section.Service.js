const sectionModel = require("../models/section.Schema")

const section = async (req,res)=>{

    try {
        const classCreate =  await sectionModel.create(req.body);
        console.log(classCreate)
        if(classCreate)  
        return {
          status: true,    
          data: classes,  
          message: "class created successfully.",
        };
      } catch (error) {
        console.error(error);  
        return {
          status: false,
          error: "Internal Server Error",
        };
      }
    };

    module.exports ={ section}