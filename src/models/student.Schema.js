const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const schoolSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(), // Use Nano ID as the default value
    unique: true,
  },
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
    ref: "class",
    unique: "true",
  },
  schoolId: {
    type: String,
    ref: "school",
    unique: "true",
  },
  sectionId: {
    type: String,
    ref: "section",
    unique: "true",
  },

  isActive: { type: Boolean, default: true },
});
const school = mongoose.model("school", schoolSchema);
module.exports =  school ;
