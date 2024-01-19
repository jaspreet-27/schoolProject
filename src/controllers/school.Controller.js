const schoolService = require("../services/school.Service");
const model = require("../models/school.Schema");
const bcrypt = require("bcrypt");

const createSchool = async (req, res) => {
  try {
  
    const school = await schoolService.createSchool(req.body);
    if (school) console.log(school);
    else {
      res.send({
        status: 500,
        error: "internal error",
      });
    }
  } catch (error) {
    res.send({
      status: 500,
      error: "internal error",
    });
  }
};

const loginSchool = async (req, res) => {
  console.log("login");
  const { email, password } = req.body;
  try {
    const school = await model.findOne({ email });

    if (school) {
      // Check if the user is in the active list
      // const isActive = await activeuser.findOne({ user: user._id });

      // if (isActive) {
      //     res.status(403).json({ status: false, error: "User is in the active list. Cannot log in." });
      //     return;
      // }

      let isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY
        );
        res.send({
          data: { user, token },
          status: true,
        });

        // if (isActive) {
        //   res
        //     .status(403)
        //     .json({
        //       status: false,
        //       error: "User is in the active list. Cannot log in.",
        //     });
        //   return;
        // }
        // const activeUser = new activeuser({ user: user._id });
        // await activeUser.save();
      } else {
        let responseObj = {
          status: 403,
          json: { status: false, error: "Password/email not correct" },
        };
        res.responseObj = responseObj;
        next(res);
      }
    } else {
      res
        .status(403)
        .json({ status: false, error: "Password/email not correct" });
    }
  } catch (error) {
    console.error(error);
    // Handle other errors or simply propagate the error
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
};

module.exports = { createSchool, loginSchool };
