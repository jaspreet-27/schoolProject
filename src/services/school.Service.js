const schools = require("../models/school.Schema");
const classes = require("../models/class.Schema")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { findById } = require("../models/meta");
const path = require('path')


const createSchool = async (schoolData) => {
  try {
    console.log("sddfsffdsd ");
    const { email, password } = schoolData;
  
    let checkUser = await schools.findOne( { email: email   });
    console.log(checkUser,"vghjk")


    if (!checkUser) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      schoolData.password = passwordHash;
      
    }
    console.log("sddfsffdsd ");
    const school = await schools.create(schoolData);
    if (school)
      return {
        status: true,
        data: school,
        message: "school created successfully.",
      };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      error: "Internal Server Error",
    };
  }
};

const login = async (email, password) => {
  try {
    const school = await schools.findOne({ email });
    console.log(password, "Pass");
    console.log(school);

    if (school) {
      // let isPasswordValid = await bcrypt.compare(password, school.password);
      const isPasswordValid = await bcrypt.compare(password, school.password);

      if (isPasswordValid) {
        const token = jwt.sign(
          { school_id: school._id, email },
          process.env.TOKEN_KEY
        );

        return { school, token, status: true };
      } else {
        return { status: false, error: "Password/email not correct" };
      }
    }
  } catch (error) {
    console.log("Error during login:", error);
    return { status: false, error: "Internal Server Error" };
  }
};

// const updateSchool = async (updateData) => {
// const {email}= req.body;
//   try {
//     const existEmail = await schools.findone( email);
//     if(existEmail){
//       return {
//         message:"email already exist"
//       }
//     }
//     const updatedata = await schools.updateOne(updateData)
//     if(updateData){
//       return {
//         data : updateData,
//         message:"succesfully updated"
//       }
//     }
      
//   } catch (error) {
//     console.log("Error during login:", error);
//     return { status: false, error: "Internal Server Error" };  
//   }
  
// };


const updateSchool = async (id, updatedData) => {
  const {email}= updatedData;
  const existEmail = await schools.updateMany({email});
  if(!existEmail){
    return {
      message:"already exist" 
    }
  }
  return await schools.findByIdAndUpdate(id, updatedData, { new: true });
};




const findClass = async (schoolId) => {
  try {
    const classe = await schools.find({});
    if (classe) {
      
      console.log(classe, "gfvbhdn");
    }
    const classCount = await schools.countDocuments({ schoolId });
    console.log(schoolId, "trcyvubhjk");
    return { count: classCount };
  } catch (error) {
    console.log(error, "uijokp");
  }
};

const details = async (data) => {
  // console.log(data);
  try {
    const getAllDetails = await schools.find({});
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

const deleteSchool = async (schoolId) => {
  
 try {
  const softDelete= await schools.findByIdAndUpdate(schoolId ,  {isDeleted: true ,  isActive: false });
  console.log(softDelete)
  return;
  
 } catch (error) {
  
 }
};




module.exports = { createSchool, login, updateSchool, details ,deleteSchool};
      