const issueBookModel = require("../models/library/issueBook.Schema");
const librarayModel = require("../models/library/library.Schema");
const booksModel = require("../models/library/books.Schema");
const studentModel = require("../models/student.Schema");
const schoolModel = require("../models/school.Schema");

const issueBook = async (req, res) => {
  const { libraryId, bookId, studentId } = req.body;
  try {
    const library = await librarayModel.findById(libraryId);
    const book = await booksModel.findById(bookId);
    const student = await schoolModel.findById(studentId);

    if (!library || !book || !student) {
      console.log("book library student no found");
    } else {
      res.send({
        message: "book libraray student founded",
      });
    }
  } catch (error) {}
};
