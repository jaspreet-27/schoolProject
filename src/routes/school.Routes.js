const  express = require("express");
const router = express.Router();
const schoolController = require("../controllers/school.Controller");
const auth = require("../middleware.js/auth")


router.post("/create",schoolController.createSchool);
router.post("/login",schoolController.loginSchool);
router.get("/allDetails",schoolController.getAllDetails)
router.put("/update/:id",auth,schoolController.updateSchool);

module.exports = router;   