const studentService = require("../services/student.Service");

const createStudent = async (req, res) => {
  try {
    const student = await studentService.create(req);
    if (student)
      return res.send({
        status: 201,
        message: "student created successfully",
      });else{
        return res.send({
            status: 500,
            error: "not found",
          })
      }
  } catch (error) {

    res.send({
        status: 500,  
        error: "internal error",
      });
  }
};

module.exports = {createStudent};
