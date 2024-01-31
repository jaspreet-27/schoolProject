const teacherService = require("../services/teacher.Service");

const createTeacher = async (req, res) => {
  try {
    console.log("(*&^%$");
    const section = await teacherService.teacher(req);
    if (section) {
      console.log(section);
      return res.send({
        status: 200,
        data: section,
        message: " section created successfully",
      });
    } else {
      res.send({
        status: 500,
        message: "not created",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      error: "internal error",
    });
  }
};

module.exports = {
  createTeacher,
};
