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

const studentUpdate = async (req, res) => {
  const { id: _id } = req.params;
  const updatedStudentData = req.body;
  try {
    const updatedStudent = await studentService.update(_id, updatedStudentData);
    if (updatedStudent) {
      return res.send({
        status: 201,
        meaasge: "created succssfully",
        data: updatedStudent,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const studentOfASchool = async (req, res) => {
  const { schoolId: _id } = req.params.id;
  try {
    const studentCount = await studentService.findSchool(req.params.id);
    if (studentCount) {
      // console.log(school, "id");
      console.log("Student count:", studentCount);
      // You can send this data as a response if needed
      res.json({ studentCount });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const studentInClass = async (req, res) => {
  const { classId: _id } = req.params.id;
  try {
    const studentCountInClass = await studentService.studentInClass(
      req.params.id
    );
    if (studentCountInClass) {
      console.log("hnj", studentCountInClass);
      res.json({ studentCountInClass });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const studentsAsPerSection = async (req,res)=>{
  const { sectionId: _id } = req.params.id;
  try {
    const sectionCount = await studentService.section(
      req.params.id
    );
    if (sectionCount) {
      console.log("hnj", sectionCount);
      res.json({sectionCount});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
const getAllDetails = async(req,res)=>{

  // const {id:_id} = req.params;
  try {
    const getAllDetails = await studentService.details(req.body);
    if(getAllDetails){
      res.send({  
        status : 200,
        message : "student details",
        data : getAllDetails
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    
  }
}  
module.exports = { createStudent, studentUpdate, studentOfASchool,studentInClass,studentsAsPerSection ,getAllDetails};
