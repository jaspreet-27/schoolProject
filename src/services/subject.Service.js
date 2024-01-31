const subjectModel = require("../models/subject.Schema")

const create= async (req,res)=>{

    try {
      console.log(req.body,"req.body")

      const existingSubject = await subjectModel.findOne({ slug: req.body.slug });
      if(existingSubject){
        return {
          status: false,
          error: "Slug already exists.",
        };
      }
        const createSubject =  await subjectModel.create(req.body);
        console.log(createSubject)
        if(createSubject)  
        return {   
          status: true,    
          data : createSubject ,  
          message: "subject created successfully.",
        };
      } catch (error) {
        console.log(error);  
        return {
          status: false,
          error: "Internal Server Error",
        };
      }
    }; 

    module.exports={
        create
    }