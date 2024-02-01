const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const meta = require("../models/meta");
mongoose.plugin(slug);
mongoose.plugin(meta);

const categoriesOfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  libraryId: {
    type: String,
    ref: "library",
    unique: "true",
  },
  isActive: { type: Boolean, default: true },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
});
classSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
});

const categoies = mongoose.model("Category", categoriesOfSchema);
module.exports = categoies;
