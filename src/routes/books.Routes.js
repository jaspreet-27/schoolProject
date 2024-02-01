const  express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.Controller");

const auth = require("../middleware.js/auth")

router.use('/create',booksController.createBooks)

module.exports = router;  