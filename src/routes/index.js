const express = require("express");
const rootRouter = express.Router()

const school = require("../routes/school.Routes")
const classes = require("./class.Routes")
const section = require("../routes/section.Routes")
const student= require('../routes/student.Routes')

rootRouter.use('/school',school);
rootRouter.use('/classes',classes)
rootRouter.use("/section",section)
rootRouter.use('/student',student)

  
module.exports = rootRouter;  