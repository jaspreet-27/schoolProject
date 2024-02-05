const mongoose = require("mongoose");
// const meta = require("../models/meta");
// mongoose.plugin(meta);

const issueBookSchema = new mongoose.Schema({
  libraryId: {
    type: String,
    ref: "library",
    unique: "true",
  },
  studentId: {
    type: String,
    ref: "Student",
    unique: "true",
  },
  bookId: {
    type: String, 
    ref: "books",
    unique: "true",
  },
  issueDate: {
    type: String,
    default: Date,
  },
  fees:{
    type: Number,
    requied : true
  },
  returnDate: {
    type: String,
    default: Date,
  },
});
issueBookSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
});
// classSchema.set("timestamps", true);
const issueBook = mongoose.model("bookIssue", issueBookSchema);
module.exports = issueBook;
