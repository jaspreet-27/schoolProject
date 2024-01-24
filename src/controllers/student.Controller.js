const studentService = require("../services/student.Service");


const createStudent = async (req, res) => {
  try {
    const student = await studentService.create(req);

    if (student) {
      return res.status(201).send({
        status: 201,
        message: "Student created successfully",
        data: student,
      });
    } else {
      return res.status(500).send({
        status: 500,
        error: "Internal server error",
      });
    }
  } catch (error) {
    console.error("Error creating student:", error);
    return res.status(500).send({
      status: 500,
      error: "Internal server error",
    });
  }
};

const studentUpdate = async (req,res)=>{
  const {id:_id} = req.params;
  const updatedStudentData = req.body;
  try {
    const updatedStudent = await studentService.update(_id,updatedStudentData)
    if(updatedStudent){
      return res.send({
        status:201,
        meaasge : "created succssfully",
        data: updatedStudent
      })
    }  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createStudent, studentUpdate };
