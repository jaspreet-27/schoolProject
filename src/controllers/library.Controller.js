const libraryService = require("../services/library.Service");

const createLibrary = async (req, res) => {
  try {
    console.log("(*&^%$");
    const library = await libraryService.library(req);
    if (library) {
      console.log(library);
      return res.send({
        status: 201,
        data: library,
      });
    } else {
      res.send({
        status: 500,
        message: "not created",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      error: "internal error",
    });
  }
};

const getAllDetails = async (req, res) => {
  try {
    const getAll = await libraryService.findLibraryDetails(req.body);
    console.log(getAll, "xdcf");
    if (getAll) {
      // console.log(getAll,"sdftgyhujio")
      res.send({
        library: getAll,  
        staus: 200,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      error: "internal error",
    });
  }
};

const getLibraryBySchool =  async (req,res)=>{
  const {schoolId: _id} = req.params.id;
try {
  const schoolLibrary = await libraryService.findLibrary(req.params.id);
  console.log(schoolLibrary)
if(schoolLibrary){
  res.send({
    library: schoolLibrary,  
    staus: 200,
  });
}
} catch (error) {
  console.log(error);
    res.send({
      status: 500,
      error: "internal error",
    });
}
}
module.exports = { createLibrary, getAllDetails,getLibraryBySchool };
