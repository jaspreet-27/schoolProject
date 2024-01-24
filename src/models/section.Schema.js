const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const slug = require('mongoose-slug-generator')
const meta= require("../models/meta")
mongoose.plugin(meta)
mongoose.plugin(slug)

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  classId: {
    type: String,
    ref: "Class",
    unique: "true",
  },
  isActive: { type: Boolean, default: true },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },  
});
sectionSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
  // alphabets: "abcde#"
});
// sectionSchema.set("timestamps", true);
const section = mongoose.model("Section", sectionSchema);
module.exports = section;
