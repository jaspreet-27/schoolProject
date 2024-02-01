const express = require("express");
const rootRouter = express.Router()

const school = require("../routes/school.Routes")
const classes = require("./class.Routes")
const section = require("../routes/section.Routes")
const student= require('../routes/student.Routes')
const teacher = require('../routes/teacher.Routes')
const subject = require('../routes/subject.Routes')
const linksubWithTeacher = require('../routes/linkSubWithTeacher.Routes')
const library = require('../routes/library.Routes')
const bookCategory = require('../routes/bookCategory.Routes')
const books = require('../routes/books.Routes')
const issueBook =require('../routes/issueBook.Routes')

rootRouter.use('/school',school);
rootRouter.use('/classes',classes);
rootRouter.use("/section",section);
rootRouter.use('/student',student);
rootRouter.use('/teacher',teacher);
rootRouter.use('/subject',subject);
rootRouter.use('/link',linksubWithTeacher);
rootRouter.use('/library',library)
rootRouter.use('/bookCategory',bookCategory)
rootRouter.use('/books',books)
rootRouter.use('/issueBook',issueBook)


module.exports = rootRouter;  