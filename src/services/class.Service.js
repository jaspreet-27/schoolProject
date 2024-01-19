
const classModel = require("../models/class.Schema")
const create = async (req,res)=>{

    try {
        const classCreate =  await classModel.create(req.body);
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


module.exports = {create}