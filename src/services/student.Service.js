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
// const findSchool = async(schoolId)=>{
// return await studentModel.findById(schoolId)
// }
const findSchool = async (schoolId) => {
  // const {schoolId} = req.params.id;
  try {
      const school = await studentModel.find({});
      const studentCount = await studentModel.countDocuments({  schoolId });
      return { count:studentCount };
  } catch (error) {
    console.log(error,"uijokp")      
  }
}

const studentInClass = async (classId)=>{
  try {
    const students = await studentModel.find({});
    if(students){
      console.log(students,"dfghjkl")
    }
    const studentsCountInClass =  await studentModel.countDocuments({classId});
    return {count:studentsCountInClass}
  } catch (error) {
    console.log(error,"uijokp")    
  }
}


const section = async (sectionId)=>{
  try {
    const asPerSection= await studentModel.find({});
    if(asPerSection){
      console.log(asPerSection,"dfghjkl")
    }
    const studentsAsPerSection=  await studentModel.countDocuments({sectionId});
    return {count:studentsAsPerSection}
  } catch (error) {
    console.log(error,"uijokp")    
  }
}

const details = async (data) => {
  try {
    const getAllDetails = await studentModel.find({});
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


module.exports = { create , update, findSchool,studentInClass,section,details};

      