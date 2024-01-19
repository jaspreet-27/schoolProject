if (process.env.NODE_ !== "production") {
    require("dotenv").config();
  }
  require("dotenv").config();
const express =  require("express")
const app = express();
const myRoutes = require("./src/routes")
require("./src/config/dataBase");
app.use(express.json());
app.use('/',myRoutes)
app.listen(6000,(res,req)=>{
console.log("server is running on 6000 port")
})  