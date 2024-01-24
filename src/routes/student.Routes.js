const  express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.Controller");
router.post("/create",studentController.createStudent);
router.post("/update/:id",studentController.studentUpdate);


module.exports = router;