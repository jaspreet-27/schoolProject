const  express = require("express");
const router = express.Router();
const libraryController = require("../controllers/library.Controller");
const auth = require("../middleware.js/auth")


router.post("/create",libraryController.createLibrary);


module.exports = router; 