const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images'),
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '_' + Date.now()
            + path.extname(file.originalname))
        }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1024 * 1024
    }, 
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
});

module.exports = imageUpload;