const classes = require("../models/class.Schema");


const creates = async (req, res) => {
  try {
    console.log(req.body, "req.body");
    const existingClass = await classes.findOne({ slug: req.body.slug });
    if (existingClass) {
      return {
        status: false,
        error: "Slug already exists.",
      };
    }
    const classCreate = await classes.create(req.body);

    console.log(classCreate);
    if (classCreate) {
      return {
        status: true,
        data: classCreate,
        message: "Class created successfully.",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      error: "Internal Server Error",
    };
  }
};

const updateClass = async (id, updatedData) => {
  return await classes.findByIdAndUpdate(id, updatedData, { new: true });
};
const findClass = async (schoolId) => {
  try {
    const classe = await classes.find({});
    if (classe) {
      
      console.log(classe, "gfvbhdn");
    }
    const classCount = await classes.countDocuments({ schoolId });
    console.log(schoolId, "trcyvubhjk");
    return { count: classCount };
  } catch (error) {
    console.log(error, "uijokp");
  }
};

const details = async (data) => {
  // console.log(data);
  try {
    const getAllDetails = await classes.find({});
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



module.exports = { creates, updateClass, findClass ,details};
