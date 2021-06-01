const multer  = require('multer');
var path = require('path')
const { uuid } = require('uuidv4');

const storage = (directory) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, directory)
    },
    filename: function (req, file, cb) {
      cb(null, uuid() + path.extname(file.originalname))
    }
})  
} 

const uploadPublic = multer({ storage: storage("public/uploads/") });
const uploadRestricted = multer({ storage: storage("restricted/uploads") });

module.exports = {
    uploadPublic,
    uploadRestricted
};
  