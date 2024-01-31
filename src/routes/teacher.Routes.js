const  express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacher.Controller");


router.post("/create",teacherController.createTeacher);



module.exports = router;    