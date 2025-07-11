import multer from "multer";

const storage = multer.diskStorage({
  diskStorage: function (req, res, cb) {
    cb(null, "/public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
