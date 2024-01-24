

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
  
module.exports = {creates, updateClass};


