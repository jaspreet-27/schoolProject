const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  classId: {
    type: String,
    ref: "Class",
    unique: "true",
  },
  schoolId: {
    type: String,
    ref: "School",
    unique: "true",
  },
  sectionId: {
    type: String,
    ref: "Section",
    unique: "true",
  },

  isActive: { type: Boolean, default: true },
});
schoolSchema.plugin(require('mongoose-nanoid') ,{ length: 16, 
  // alphabets: "abcde#"
 }
 )
const school = mongoose.model("School", schoolSchema);
module.exports =  school ;
