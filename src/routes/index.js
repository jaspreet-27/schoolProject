const express = require("express");
const rootRouter = express.Router()

const school = require("../routes/school.Routes")
const classes = require("./class.Routes")
const section = require("../routes/section.Routes")

rootRouter.use('/school',school);
rootRouter.use('/classes',classes)
rootRouter.use("/section",section)

  
module.exports = rootRouter;