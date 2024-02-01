const  express = require("express");
const router = express.Router();
const bookCategoryController = require("../controllers/bookCategory.Controller");



router.use('/create',bookCategoryController.createBookCategory)


module.exports = router; 