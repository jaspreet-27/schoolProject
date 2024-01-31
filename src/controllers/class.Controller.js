const classService = require("../services/class.Service");

const createClass = async (req, res) => {
  try {
    console.log("dfghjttfyguhi");
    const classes = await classService.creates(req);
    if (classes) {
      console.log(classes);
      return res.send({
        status: 200,
        data: classes,
        message: "success",
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

const classUpdate = async (req, res) => {
  const { id: _id } = req.params;
  const updatedClassData = req.body;
  try {
    const updatedClass = await classService.updateClass(_id, updatedClassData);
    if (updatedClass) {
      return res.send({
        status: 201,
        meaasge: "created succssfully",
        data: updatedClass,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getclass = async (req, res) => {
  const { schoolId: _id } = req.params.id;
  try {
    const classCount = await classService.findClass(req.params.id);
    if (classCount) {
      console.log(classCount, "bnimo");
      res.send({ classCount });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllDetails = async (req, res) => {
  // const {id:_id} = req.params;
  try {
    const getAllDetails = await classService.details(req.body);
    if (getAllDetails) {
      res.send({
        status: 200,
        message: "class details",
        data: getAllDetails,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createClass, classUpdate, getclass, getAllDetails };
