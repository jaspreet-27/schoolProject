const classService = require("../services/class.Service");

const createClass = async (req, res) => {
  try {
    const classes = await classService.create(req.body);
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

module.exports = { createClass };
