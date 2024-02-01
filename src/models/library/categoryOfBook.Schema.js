const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
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
categoriesOfSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
});

const categoies = mongoose.model("Category", categoriesOfSchema);
module.exports = categoies;
