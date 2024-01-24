const studentModel = require("../models/student.Schema");
const schoolModel = require('../models/school.Schema')
 const classModel = require('../models/class.Schema')
 const sectionModel = require('../models/section.Schema')

const create = async (req, res) => {
  try {
    
    const { schoolId, classId, sectionId } = req.body;
    const checkSchool = await schoolModel.findById(schoolId);
    console.log(schoolId,"vgbhnm")
    if (!checkSchool) {
      return res.status(403).send({
        status: 403,
        error: "School id not found",
      });
    }

    const checkClass = await classModel.findOne({ _id: classId, schoolId });
    console.log(checkClass,"vgbhnm")
    if (!checkClass) {
      return res.status(403).send({
        status: 403,
        error: "Class id not found for the specified school",
      });
    }

    const checkSection = await sectionModel.findOne({ _id: sectionId, classId});
    console.log(checkClass,"cvtyubinom")
    if (!checkSection) {  
      return {
        status: 403,
        error: "Section id not found for the specified class and school"
      }
    }

    const student = await studentModel.create(req.body);

    if (student) {
      console.log("Student created successfully");
    return res.send({ 
      status: 201,
      message : " created successfully"
    })
    }
  } catch (error) {
    console.error("Error creating student:", error);
    return res.status(500).send({  
      status: 500,
      error: "Internal Server Error",
    });
  }
};


const update = async (id, updatedData) => {
  return await studentModel.findByIdAndUpdate(id, updatedData, { new: true });
};

module.exports = { create , update};

 