const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const slug = require("mongoose-slug-generator");
const meta = require("../models/meta");
mongoose.plugin(meta);
mongoose.plugin(slug);

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },  
  isActive: { type: Boolean, default: true },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
});
subjectSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
});

const subject = mongoose.model("Subject", subjectSchema);
module.exports = subject;
