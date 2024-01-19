const  express = require("express");
const router = express.Router();
const schoolController = require("../controllers/section.Controller");
// const { createSchool } = require("../services/school.Service");


router.post("/create",schoolController.createSection);


module.exports = router;