const  express = require("express");
const router = express.Router();
const schoolController = require("../controllers/school.Controller");
// const school = require("../models/school.Schema")
const auth = require("../middleware.js/auth")
const upload = require("../middleware.js/upload.Files")


router.post("/create",upload.upload.single("img"),schoolController.createSchool);
router.post("/login",schoolController.loginSchool);    
router.get("/allDetails",schoolController.getAllDetails)
router.put("/update/:id",schoolController.updateSchool);
router.delete("/:id",schoolController.deleteSchool)
router.post("/upload",schoolController.uploadImage)

module.exports = router;   