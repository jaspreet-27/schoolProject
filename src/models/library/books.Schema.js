const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
// const meta = require("../models/meta");
mongoose.plugin(slug);
// mongoose.plugin(meta);

const booksSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  categoryId: {
    type: String,
    ref: "Category",
    unique: "true",
  },
  libraryId: {
    type: String,
    ref: "library",
    unique: "true",
  },
  slug: {
    type: String,
    slug: "title",
    unique: true,
  },
});
booksSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
});
// classSchema.set("timestamps", true);
const books = mongoose.model("books", booksSchema);
module.exports = books;
