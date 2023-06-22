// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

//  const upload = multer({
//    storage: multer.diskStorage({
//      destination: (req, file, cb) => {
//        const uploadDir = path.join(process.cwd(), 'public', 'carousel');
//        fs.mkdirSync(uploadDir, { recursive: true });
//        console.log("asdfasdfasdfas", uploadDir)
//        cb(null, uploadDir);
//      },
//      filename: (req, file, cb) => {
//        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//        const fileExtension = path.extname(file.originalname);
//        const fileName = `${uniqueSuffix}${fileExtension}`;
//        cb(null, fileName);
//      },
//    }),
//  });

// export default upload.single('image');


// var filestorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null,'public/carousel')
//   },
//   filename:(req,file, cb) => {
//       cb(null,"asdfkljasdfjasd  fjasdfkjasdfjasd  fjasdñfjasdfj")
//   }
// })

// var upload = multer({
//   storage:filestorageEngine
// })
