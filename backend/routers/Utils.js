const express = require('express')
const router = express.Router()
const multer  = require('multer')

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, './Uploads')
    },
    filename:  (req, file, cb) => {
      cb(null, file.originalname)
    }
  });

  
  const upload = multer({ storage: storage });
  router.post('/uploadfile', upload.single('file'), function (req, res) {
res.json({message: 'file uploaded successfully'})
    console.log(req.file, req.body)
 });

 module.exports = router;