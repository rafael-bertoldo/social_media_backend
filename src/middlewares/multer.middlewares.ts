import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({
    destination: 'upload',
    filename: (request, file, callback) => {
      const name = `${file.originalname}`

      return callback(null, name)
    }
  })
})