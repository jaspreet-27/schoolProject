const  express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.Controller");
const auth = require("../middleware.js/auth")

router.post("/create",studentController.createStudent);
router.put("/update/:id",studentController.studentUpdate);
router.get("/allDetails",studentController.getAllDetails)
router.get("/studentOfschool/:id",auth,studentController.studentOfASchool)
router.get('/studentsInClass/:id',auth,studentController.studentInClass)
router.get('/studentsAsPerSection/:id',auth,studentController.studentsAsPerSection)


module.exports = router;