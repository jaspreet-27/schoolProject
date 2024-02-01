
const  express = require("express");
const router = express.Router();
const issueBookController = require("../controllers/issueBook.Controller")
const auth = require("../middleware.js/auth")

router.post("/create",issueBookController.issueBooks)



module.exports = router;      