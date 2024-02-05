const schoolService = require("../services/school.Service");
const createSchool = async (req, res) => {
  try {
    console.log("im here");
    const school = await schoolService.createSchool(req.body);

    if (school) console.log(school);
    res.send({
      status: 200,
      data: "school",
    });
  } catch (error) {
    res.send({
      status: 500,
      error: "internal error",
    });
  }
};

// const loginSchool = async (req, res) => {
//   console.log("login");
//   const { email, password } = req.body;
//   try {
//     const school = await model.findOne({ email });

//     if (school) {  
//       console.log(school,"school")
//       // Check if the user is in the active list
//       // const isActive = await activeuser.findOne({ user: user._id });

//       // if (isActive) {
//       //     res.status(403).json({ status: false, error: "User is in the active list. Cannot log in." });
//       //     return;
//       // }

//       let isPasswordValid = await bcrypt.compare(password, school.password);
//       console.log("Password validation result:", isPasswordValid);

//       if (isPasswordValid) {
      
//         // const token = jwt.sign(
//         //   { school_id: school._id, email },  
//         //   process.env.TOKEN_KEY
          
//         // );
//         const token = jwt.sign(
//           { school_id: school._id, email },  
//           process.env.TOKEN_KEY
//         );
//         console.log(process.env.TOKEN_KEY,"token")
//         return res.send({
//           data: { school, token }, 
//           status: true,
//         });

//         // if (isActive) {
//         //   res
//         //     .status(403)
//         //     .json({
//         //       status: false,
//         //       error: "User is in the active list. Cannot log in.",
//         //     });
//         //   return;
//         // }
//         // const activeUser = new activeuser({ user: user._id });
//         // await activeUser.save();
//       } else {
//         res.send({
//           status: 403,
//           error: "Password/email not correct",
//         });
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ status: false, error: "Internal Server Error" });
//   }
// };

// const loginSchool = async (req, res) => {
//   console.log("login");
//   const { email, password } = req.body;

//   try {
//     const school = await model.findOne({ email });

//     if (school) {  
//       console.log(school, "school");
//       let isPasswordValid = await bcrypt.compare(password, school.password);
//       console.log("Password validation result:", isPasswordValid);

//       if (isPasswordValid) {
//         const token = jwt.sign(
//           { school_id: school._id, email },
//           process.env.TOKEN_KEY
//         );
//         console.log(process.env.TOKEN_KEY, "token");

//         return res.send({
//           data: { school, token },
//           status: true,
//         });
//       } else {
//         res.status(403).json({
//           status: false,
//           error: "Password/email not correct",
//         });
//       }
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ status: false, error: "Internal Server Error" });
//   }
// };

// schoolController.js

const loginSchool = async (req, res) => {
  console.log(req.body,"login");
  const { email, password } = req.body;

  const result = await schoolService.login(email, password);
  console.log(result,"serdtfyguhj")
   
  if (result) {
    return res.send({
      data: { school: result.school, token: result.token },
      status: true,
    });
  } else {
    return res.status(403).json({
      status: false,
      error: result.error,
    });
  }
};

const updateSchool = async(req,res)=>{
const {id:_id} = req.params;
try {

  const updatedSchool = await schoolService.updateSchool(_id)
  if(updatedSchool){
    return res.send({
      status:201,
      meaasge : "created succssfully",
      data: updatedSchool
    })
  }  
} catch (error) {
  res.status(500).json({ error: error.message });
}   
}

const getAllDetails = async(req,res)=>{

  // const {id:_id} = req.params;
  try {
    const getAllDetails = await schoolService.details(req.body);
    if(getAllDetails){
      res.send({  
        status : 200,
        message : "school details",
        data : getAllDetails
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    
  }
}   



  

module.exports = { createSchool, loginSchool,updateSchool,getAllDetails};
