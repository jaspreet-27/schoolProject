const model = require("../models/student.Schema");

const create = async (req, res) => {
  try {
    const student = await model.create(req.body);
    if (student)
      return res.send({
        status: 201,
        message: " student created successfully",
      });
  } catch (error) {

    return {   
        status: false,  
        error: "Internal Server Error",
      };
  }  
};
module.exports = {create}
