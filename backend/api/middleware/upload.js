const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    let time = moment().format('YYYYMMDD-HHmmss-SSS');
    cb(null, `${time}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const MB = 1048576;
const limits = {
  fileSize: MB * 5
};

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits
});
