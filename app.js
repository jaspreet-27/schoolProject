if (process.env.NODE_ !== "production") {
    require("dotenv").config();
  }
  require("dotenv").config();
const express =  require("express")
const app = express();

const resInterceptor = require('./src/interceptor/res.interceptor')
const myRoutes = require("./src/routes")
app.use('/uploads', express.static('uploads'))
app.use( resInterceptor);
require("./src/config/dataBase");
app.use(express.json());
app.use('/',myRoutes)
app.listen(6000,(res,req)=>{
console.log("server is running on 6000 port")
})  