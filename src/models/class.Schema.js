const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const slug = require("mongoose-slug-generator");
const meta = require("../models/meta");
mongoose.plugin(slug);
mongoose.plugin(meta);


const classSchema = new mongoose.Schema({
  grade: {   
    type: String,
    required: true,
    // unique: true,  
  },  
  schoolId: {
    type: String, 
    ref: "School",
    unique: "true",
  },
  isActive: { type: Boolean, default: true },
  slug: {
    type: String,
    slug: "grade",
    unique: true,
  },
 
});
classSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
});
// classSchema.set("timestamps", true);
const classes = mongoose.model("Class", classSchema);
module.exports = classes;
