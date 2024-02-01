const linkModel = require("../models/linkSubjectWithTeacher.Schema");
const teacher = require("../models/teacher.Schema");
const subject = require("../models/subject.Schema");

const create = async (teacherId, name) => {
  try {
    // console.log(req.body,"req.body")
    const teachers = await teacher.findById(teacherId);
    const subjects = await subject.findOne( {name:name});
    console.log(teachers, "gbhnjxk");
    console.log(subjects, "jofcvgbhnjmkl,");
    if (!teachers || !subjects) {
      console.log(teachers, "gbhnjxk");
      console.log(subjects, "jofcvgbhnjmkl,");
      return {
        status: false,
        error: "teacher or subject not found.",
      };
    }
    const existingLink = await linkModel.findOne({
      teacherId: teachers._id,
      name: name._name,
    });
    if (existingLink) {
      return {
        status: false,
        error: "Link already exists.",
      };
    }
    const result = await linkModel.create({
      teacherId: teachers._id,
      name: name,
    });
    return {
      status: true,
      data: result,
      message: "subject linked to teacher successfully.",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const getTeacherWithSubject = async (req, res) => {
  const get = await linkModel.find({});
  console.log(get, "eyuio");
  return {
    status: 200,
    data: get,
  };
};

const findclass = async (classId) => {
  const getLinks = await linkModel.find({});
  if (getLinks) {
    console.log(getLinks, "eddrftgyhu");
  }
  const getTeacherAndSubjectBYClass = await linkModel.find(classId);
  if (getTeacherAndSubjectBYClass) {
    console.log(getTeacherAndSubjectBYClass, "dfghjkl");
    return { getTeacherAndSubjectBYClass };
  }
};

module.exports = { create, getTeacherWithSubject, findclass };
