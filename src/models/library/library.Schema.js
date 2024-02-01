const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
// const meta = require("../models/meta");
mongoose.plugin(slug);
// mongoose.plugin(meta);

const librarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  schoolId: {
    type: String,
    ref: "School",
    unique: "true",
  },
  email: {
    type: String,
    required: true,
  },  
  number: {
    type: Number,
    required: true,
  },
  isActive: { type: Boolean, default: true },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
});
librarySchema.plugin(require("mongoose-nanoid"), {
  length: 16,
});
// classSchema.set("timestamps", true);
const library = mongoose.model("library", librarySchema);
module.exports = library;
