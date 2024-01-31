const sectionService = require("../services/section.Service");

const createSection= async (req, res) => {
  try {
    console.log("(*&^%$")

    

    const section = await sectionService.section(req);
    // console.log()
    if (section) { 
      console.log(section);
      return res.send({
        status: 200,
        data : section,
        message : " section created successfully"
      })
  
    } else {
      res.send({
        status: 500,
        message: "not created",
      });
    }
  } catch (error) {
    console.log(error)
    res.send({
      status: 500,
      error: "internal error",
    });
  }
};

const updateSection = async (req,res)=>{
  const {id:_id} = req.params;
  const updatedSectionData = req.body;
  try {
    const updatedSection = await sectionService.update(_id,updatedSectionData)
    if(updatedSection){
      return res.send({
        status:201,
        meaasge : "created succssfully",
        data: updatedSection
      })
    }  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


const getAllDetails = async(req,res)=>{

  // const {id:_id} = req.params;
  try {
    const getAllDetails = await sectionService.details(req.body);
    if(getAllDetails){
      res.send({  
        status : 200,
        message : "section details",
        data : getAllDetails
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    
  }
}   

module.exports = { createSection,updateSection ,getAllDetails};