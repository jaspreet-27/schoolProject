const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const sectionSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(), // Use Nano ID as the default value
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  classId: {
    type: String,
    ref: "class",
    unique: "true",
  },
  isActive: { type: Boolean, default: true },
});

const section = mongoose.model("section", sectionSchema);
module.exports =  section ;
