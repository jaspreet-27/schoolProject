const  express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkSubWithTeacher.Controller");


router.post("/create",linkController.linking);
router.get('/',linkController.teacherWithSubject);
router.get('/withclass',linkController.classListing);



module.exports = router;  