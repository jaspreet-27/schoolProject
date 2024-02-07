const mongoose = require("mongoose");
const timestamp = require("../models/meta");
// const meta = mongoose.model("Meta");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  branch: {
    type: String,
    // required: true,
  },
  contactNumber: {
    type: Number,
    // required: true,
  },
  principle: {
    type: String,
    // required: true,
  },
  medium: {
    type: String,
    // required: true,
  },
  isActive: { type: Boolean, default: true },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  img:
  {
    type: String,
    // reuired: true
  }
});
timestamp;
schoolSchema.plugin(require("mongoose-nanoid"), {
  length: 16,
  //  alphabets: "abcde#"
});

const schools = mongoose.model("School", schoolSchema);
module.exports = schools;
