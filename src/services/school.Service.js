const model = require("../models/school.Schema")
// const mongoose = require("mongoose")




const createSchool =  async (schoolData) => {
    try {
      const {email}= schoolData;
      let checkUser = await model.findOne({
        email: email,
      });
      if(!checkUser) {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
      }
  
      // if (existingSchool) {
      //   return {
      //     status: false,
      //     error: "Organization with this name already exists.",
      //   };
      // }
      // console.log(schoolData , "schoolsakb") 
    
      const school = await model.create(schoolData);

      console.log(schoolData)
      if(school)  
      return {
        status: true,    
        data: school,  
        message: "school created successfully.",
      };
    } catch (error) {
      console.error(error);  
      return {
        status: false,
        error: "Internal Server Error",
      };
    }
  };
  module.exports = {createSchool}

