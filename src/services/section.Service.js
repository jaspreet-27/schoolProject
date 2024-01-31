const sectionModel = require("../models/section.Schema")

const section = async (req,res)=>{

    try {
      console.log(req.body,"req.body")

      const existingsection = await sectionModel.findOne({ slug: req.body.slug });
      if(existingsection){
        return {
          status: false,
          error: "Slug already exists.",
        };
      }
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

    const update = async (id, updatedData) => {
      return await sectionModel.findByIdAndUpdate(id, updatedData, { new: true });
    };


    
const details = async (data) => {
  try {
    const getAllDetails = await sectionModel.find({});
    if (getAllDetails) {
    
      return {   
        data :getAllDetails
      };
      // console.log(getAllDetails, "uhjioklpk");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log("Error during login:", error);
    return { status: false, error: "Internal Server Error" };
  }
};
    module.exports ={section,update,details}