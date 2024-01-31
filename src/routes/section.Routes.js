const  express = require("express");
const router = express.Router();
const sectionController = require("../controllers/section.Controller");
// const { createSchool } = require("../services/school.Service");
const auth = require("../middleware.js/auth")

router.post("/create",sectionController.createSection);
router.put("/update/:id",auth,sectionController.updateSection);
router.get("/allDetails",sectionController.getAllDetails)


module.exports = router;    