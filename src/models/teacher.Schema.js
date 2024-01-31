const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const slug = require('mongoose-slug-generator')
// const meta= require("../models/meta")
// mongoose.plugin(meta)
mongoose.plugin(slug)

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  qualification:{
    type: String,
    required: true,
  },
  schoolId: {
    type: String, 
    ref: "School",
    unique: "true",
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
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
teacherSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
  // alphabets: "abcde#"
});
// sectionSchema.set("timestamps", true);
const teacher = mongoose.model("Techers", teacherSchema);
module.exports = teacher;