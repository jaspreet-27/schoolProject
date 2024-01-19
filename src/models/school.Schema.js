const mongoose = require("mongoose");
const {nanoid}= require("nanoid")

const schoolSchema = mongoose.Schema({
  customId: {
    type: String,
    default: () => nanoid(), // Use Nano ID as the default value
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  branch: {  
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  principle: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  isActive: { type: Boolean, 
    default: true }
});
const schools = mongoose.model("school", schoolSchema);
module.exports = schools

