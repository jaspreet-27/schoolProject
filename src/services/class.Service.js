
const classes = require("../models/class.Schema")
const creates = async (req,res)=>{
//   const {schoolId} = req.params.id
  // console.log(schoolId)

    try {
    console.log(req.body, "req.body")
        const classCreate =  await classes.create(req.body);
        console.log(classCreate)
        if(classCreate)  
        return {
          status: true,      
          data: classCreate ,    
          message: "class created successfully.",
        };  
      } catch (error) {     
        console.log(error);  
        return {   
          status: false,  
          error: "Internal Server Error",
        };
      }
    };   
  

module.exports ={creates}