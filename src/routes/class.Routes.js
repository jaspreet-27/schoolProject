
const  express = require("express");
const router = express.Router();
const classController = require("../controllers/class.Controller")
const auth = require("../middleware.js/auth")

router.post("/create",classController.createClass)
router.get("/allDetails",classController.getAllDetails)
router.put("/update/:id",auth,classController.classUpdate);
router.get("/classesOfSchool/:id",auth,classController.getclass)



module.exports = router;      