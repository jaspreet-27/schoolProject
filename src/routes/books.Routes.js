const  express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.Controller");

const auth = require("../middleware.js/auth")

router.use('/create',booksController.createBooks)
router.use('/byCategoryId/:id',booksController.findByCategoryId)
router.use('/:id',booksController.bookDetails)

module.exports = router;  