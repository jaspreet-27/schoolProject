
const  express = require("express");
const router = express.Router();
const schoolController = require("../controllers/school.Controller");



router.post("/create",schoolController.createSchool);
router.post("/login",schoolController.loginSchool)


module.exports = router;