const teacherModel = require("../models/teacher.Schema")



const teacher = async (req,res)=>{

    try {
      console.log(req.body,"req.body")

      const existingteacher = await teacherModel.findOne({ slug: req.body.slug });
      if(existingteacher){
        return {
          status: false,
          error: "Slug already exists.",
        };
      }
        const teacher =  await teacherModel.create(req.body);
        console.log(teacher)
        if(teacher)  
        return {   
          status: true,    
          data :  teacher ,  
          message: "teacher created successfully.",
        };
      } catch (error) {
        console.log(error);  
        return {
          status: false,
          error: "Internal Server Error",
        };
      }
    };  

    module.exports = {
        teacher
    }