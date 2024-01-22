const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const classSchema = new mongoose.Schema({
  grade: {
    type: String,
    required: true,
    unique: true,
  },
  schoolId: {
    type: String,
    ref: "School",
    // unique: "true",
  },
  isActive: { type: Boolean, default: true },
});  
classSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
  // alphabets: "abcde#",
});
const classes = mongoose.model("Class", classSchema);
module.exports = classes;
