
const  express = require("express");
const router = express.Router();
const classController = require("../controllers/class.Controller")


router.post("/create",classController.createClass)
router.post("/update/:id",classController.classUpdate);


module.exports = router;  