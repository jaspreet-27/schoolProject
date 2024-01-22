const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const sectionSchema = new  mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },  
  classId: {
    type: String,
    ref: "Class",
    unique: "true",
  },
  isActive: { type: Boolean, default: true },
});
sectionSchema.plugin(require('mongoose-nanoid') ,{ length: 16, 
  // alphabets: "abcde#" 
}
  )
const section = mongoose.model("Section", sectionSchema);
module.exports =  section ;
