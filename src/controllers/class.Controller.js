const classService = require("../services/class.Service");

const createClass = async (req, res) => {
  try {
    console.log("dfghjttfyguhi")
    const classes = await classService.creates(req);

    // console.log()
    if (classes) {
      console.log(classes);
      return res.send({
        status : 200,
        data: classes, 
        message : "success"
      })
  
    } else {
      res.send({   
        status: 500,   
        message: "not created",
      });  
    }
  } catch (error) {
    console.log(error)
    res.send({
      status: 500,
      error: "internal error",
    });
  }
};

module.exports =  {createClass};
