const multer =  require("multer")
const path = require("path")
// //storing image file
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')      //you tell where to upload the files,
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + '.png')
//     }
//   })

// //image filter, accepts only jpeg and png
// const fileFilter = (req, file, cb)=>{
//     if(file.minetype === 'image/jpeg' || file.minetype === 'image/png'){
//         cb(null, true)
//     }else{
//         cb(null, false)
//     }
// }
// const upload = multer({storage: storage, limits:{
//     fileSize: 1024 * 1024 * 5
// },
//     fileFilter: fileFilter  
// })
// module.exports= {upload}

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname));
  },
}); 
const upload = multer({
  storage: fileStorageEngine,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpeg)$/)) {
      return cb(new Error('jpg and png file supported'));
    }
    cb(null, true);
  }
});
module.exports= {upload}