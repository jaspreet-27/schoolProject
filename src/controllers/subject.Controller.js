const subjectService = require('../services/subject.Service')

const createSubject = async (req,res)=>{
    try {
        const subject = await subjectService.create(req);
    
        if (subject) {
          return res.status(201).send({
            status: 201,
            message: "Student created successfully",
            data: subject,
          });
        } else {
          return res.status(500).send({
            status: 500,
            error: "Internal server error",
          });
        }
      } catch (error) {
        console.error("Error creating student:", error);
        return res.status(500).send({
          status: 500,
          error: "Internal server error",
        });
      }
}

module.exports = {
    createSubject
}