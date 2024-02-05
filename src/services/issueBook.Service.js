const issueBookModel = require("../models/library/issueBook.Schema");
const librarayModel = require("../models/library/library.Schema");
const booksModel = require("../models/library/books.Schema");
const studentModel = require("../models/student.Schema");
const schoolModel = require("../models/school.Schema");

const issueBook = async (req, res) => {
  const { libraryId, bookId, studentId } = req.body;
  // console.log("ghjk",req.body)
  try {
    const library = await librarayModel.findById(libraryId._id);
    const book = await booksModel.findById(bookId._id);
    const student = await studentModel.findById(studentId._id);

//     if (library || book || student) {
//       // console.log(library,"zxcvtybui")
//       // console.log(book,"dftgyhujik")  
//       // console.log(student,"dcfvgbhnj")
//       // console.log("book library student  found");
//      console.log("data found")
//     } else {
// console.log("not found")
//     }

    const issueBook = await issueBookModel.create(req.body);
    if(issueBook){
      console.log(issueBook)
      return issueBook;
    }
  } catch (error) {
    console.log(error);
  //   res.send({
  //     status: 500,
  //     error: "internal error",
  // })
}}
module.exports={issueBook}