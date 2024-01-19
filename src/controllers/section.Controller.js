const sectionService = require("../services/section.Service");

const createSection= async (req, res) => {
  try {
    const classes = await sectionService.section(req.body);
    // console.log()
    if (classes) {
      
      console.log(classes);
  
    } else {
      res.send({
        status: 500,
        message: "not created",
      });
    }
  } catch (error) {
    res.send({
      status: 500,
      error: "internal error",
    });
  }
};

module.exports = { createSection };