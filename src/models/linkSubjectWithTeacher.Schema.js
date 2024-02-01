const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const meta = require("../models/meta");
mongoose.plugin(meta);
mongoose.plugin(slug);

const linkSubWithTeacherSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        ref: "Techers",
        unique: "true",
      },  
      subjectId: {   
        type: String,
        ref: "Subject",
        unique: "true",
      },
      classId: {
        type: String,
        ref: "Class",
        unique: "true",
      },
  isActive: { type: Boolean, default: true },
});
linkSubWithTeacherSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
});

const links = mongoose.model("linkSubWithTeacher",linkSubWithTeacherSchema);
module.exports = links;