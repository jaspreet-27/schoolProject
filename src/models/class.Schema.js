const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const classSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(), // Use Nano ID as the default value
    unique: true,
  },
  grade: {
    type: String,
    required: true,
    unique: true,
  },
    schoolId:{
         type: mongoose.Types.ObjectId,
          ref: "school", 
          unique: "true", 
    },
    isActive: { type: Boolean, 
      default: true }
  })

const classes = mongoose.model("classes",classSchema);
module.exports={classes}
