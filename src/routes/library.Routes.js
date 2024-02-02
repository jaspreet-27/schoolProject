const  express = require("express");
const router = express.Router();
const libraryController = require("../controllers/library.Controller");
const auth = require("../middleware.js/auth")


router.post("/create",libraryController.createLibrary);
router.get("/",libraryController.getAllDetails)
router.get("/schoolId/:id",libraryController.getLibraryBySchool)


module.exports = router; 