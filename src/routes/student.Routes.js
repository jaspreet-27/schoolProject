const  express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.Controller");
router.post("/create",studentController.createStudent);


module.exports = router;