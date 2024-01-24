const schools = require("../models/school.Schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createSchool = async (schoolData) => {
  try {
    console.log("sddfsffdsd ");
    const { email, password } = schoolData;
    let checkUser = await schools.findOne({
      email: email,
    });

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
    const school = await schools.findOne({email});
    console.log(password, "Pass")
    console.log(school)

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

const updateSchool = async (id, updatedData) => {
  return await schools.findByIdAndUpdate(id, updatedData, { new: true });
};
  

module.exports = { createSchool, login,updateSchool};
  