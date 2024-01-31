const linkService = require("../services/linkSubWithTeacher.service")
const linking = async (req, res) => {
    try {
      const { teacherId, name } = req.body;
      const linking = await linkService.create(teacherId,name);
      res.json({
        status: true,
        message: "User linked to organization successfully.",
        data: linking,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({  
        status: false,
        error: "Internal Server Error",
      });
    }
  };
  const teacherWithSubject = async (req,res)=>{
    try {
      const teacherWithSubject = await linkService.getTeacherWithSubject(req.body)
      if(teacherWithSubject){
        console.log(teacherWithSubject,"errdtyuio")
        return res.send({
          status : 200,
          data: teacherWithSubject,
          message : "successs"
        })
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({  
        status: false,
        error: "Internal Server Error",
      });
    }
  }

  const classListing = async (req,res)=>{

    const {classId:_id} = req.params.id;
    try {
      const classWithTeacherAndSubject = await linkService.findclass(req.params.id);
      if(classWithTeacherAndSubject){
        console.log(classWithTeacherAndSubject,"frtgyhuji");
        res.send({
         
         status:200,
          data : classWithTeacherAndSubject
        })
      }
    } catch (error) {
      console.log(error)
  res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports = {
    linking,teacherWithSubject,classListing
  }