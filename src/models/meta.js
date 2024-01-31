
const mongoose = require("mongoose");
const moment = require("moment");
mongoose.set("strictQuery", false);
const metaschema = new mongoose.Schema({
  meta: {
    createdAt: {
      type: String,
      default: () => moment().unix(Number),
    },
    updatedAt: {  
      type: String,
      default: () => moment().unix(Number),
    },
  },
});

// metaschema.set(unixTimestamp, true);
const meta = mongoose.model("Meta", metaschema);
module.exports = meta;
