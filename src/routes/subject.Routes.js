const  express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subject.Controller");


router.post("/create",subjectController.createSubject);



module.exports = router;  