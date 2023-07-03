import { query } from "../../../lib/db";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import AWS from "aws-sdk";

AWS.config.update({
    accessKeyId: process.env.AWS_KEYID,
    secretAccessKey: process.env.AWS_ACCESSKEY,
});

const s3 = new AWS.S3();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getImages(req, res);
    case "POST":
      return await postImages(req, res);
    case "DELETE":
      return await deleteImage(req, res);
  }
}

const getImages = async (req, res) => {
  try {
    const todasLasImagenes = await query("SELECT * FROM Carousel", {});
    return res.status(200).json(todasLasImagenes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener las imágenes" });
  }
};

const postImages = async (req, res) => {
   if (req.method !== "POST") {
     res.status(405).json({ message: "Method Not Allowed" });
     return;
   }
    const form = new formidable.IncomingForm();
    //form.uploadDir = path.join(process.cwd(), "public/carousel"); // Directorio de destino de las imágenes
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
     if (err) {
       console.error(err);
       res.status(500).json({ message: "Error al subir la imagen" });
       return;
     }

     const file = files.image;
     const filePath = file.filepath;
     const fileName = file.originalFilename;

  //   try {
  //     // Subir la imagen a AWS S3
       const uploadParams = {
         Bucket: "amapola-bucket",
         Key: fileName,
         Body: fs.createReadStream(filePath),
         ContentType: 'image/png'
       };
       
       const uploadResult = await s3.upload(uploadParams).promise();
  //     // Guardar la información de la imagen en la base de datos
  //     const result = await query("INSERT INTO Carousel SET ?", {
  //       nombre: fileName,
  //       ruta: uploadResult.Location,
  //     
  const result = await query("INSERT INTO Carousel SET ?", {
    nombre: fileName,
    ruta: uploadResult.Location
  });
  return res.status(200).json({ result });
})





 

  //     return res.status(200).json({ result });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ message: "Error al subir la imagen" });
  //   } finally {
  //     // Eliminar el archivo temporal después de la subida
  //     fs.unlinkSync(filePath);
  //   }
   ;
};

const deleteImage = async (req, res) => {
  const idCarousel = req.query.idCarousel;
  
  try {
    // Obtener la información de la imagen de la base de datos
    const image = await query("SELECT * FROM Carousel WHERE idCarousel = ?", idCarousel);
    if (!image || image.length === 0) {
      return res.status(404).json({ message: "La imagen no existe" });
    }
    
    const imagePath = image[0].ruta;
    
    // Eliminar la imagen de AWS S3
    // const deleteParams = {
    //   Bucket: "amapola-bucket",
    //   Key: path.basename(imagePath)
    // };

    // await s3.deleteObject(deleteParams).promise();
    
    // Eliminar la entrada de la imagen de la base de datos
    await query("DELETE FROM Carousel WHERE idCarousel = ?", idCarousel);
    
    
    return res.status(200).json({ message: "Imagen eliminada correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar la imagen" });
  }
};

// import { query } from "../../../lib/db";
// import formidable from "formidable";
// import fs from "fs";
// import path from "path";
// import AWS from "aws-sdk";

// AWS.config.update({
//   accessKeyId: "AKIA4CPMU7CW5D7IU3OO",
//   secretAccessKey: "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",
// });

// const s3 = new AWS.S3();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   switch (req.method) {
//     case "GET":
//       return await getImages(req, res);
//     case "POST":
//       return await postImages(req, res);
//     case "DELETE":
//       return await deleteImage(req, res);
//   }
// }

// const getImages = async (req, res) => {
//   const todasLasImagenes = await query("SELECT * FROM Carousel", {});
//   return res.status(200).json(todasLasImagenes);
// };


// const postImages = async (req, res) => {

//   if (req.method !== "POST") {
//     res.status(405).json({ message: "Method Not Allowed" });
//     return;
//   }
//    const form = new formidable.IncomingForm();
//    form.uploadDir = path.join(process.cwd(), "public/carousel"); // Directorio de destino de las imágenes
//    form.keepExtensions = true;
//    form.parse(req,async (err, fields, files) => {
//      if (err) {
//        console.error(err);
//        res.status(500).json({ message: "Error al subir la imagen" });
//        return;
//      }

//       const file = files.image;
//       const filePath = file.filepath;
//       const fileName = file.originalFilename;
//       const uploadParams = {
//         Bucket: "amapola-bucket",
//         Key: fileName,
//         Body: filePath,
//       };

//     const uploadResult = await s3.upload(uploadParams).promise();

//     const result = await query("INSERT INTO Carousel SET ?", {
//       nombre: fileName,
//       ruta: uploadResult.Location,
//     });
//     return res.status(200).json({ result });

//   });
// }


// const deleteImage = async (req, res) => {
//   const idCarousel = req.query.idCarousel; // Supongamos que recibes el ID de la imagen a eliminar en el cuerpo de la solicitud

//   try {
//     // Obtener la ruta y el nombre del archivo de la base de datos
//     const image = await query("SELECT * FROM Carousel WHERE idCarousel = ?", idCarousel);
//     if (!image) {
//       return res.status(404).json({ message: "La imagen no existe" });
//     }

//     const imagePath = image[0].ruta;
//     // Eliminar el archivo de la carpeta
//     fs.unlinkSync(imagePath);


//     // Eliminar la entrada de la imagen de la base de datos
//     const result = await query("DELETE FROM Carousel WHERE idCarousel = ?", idCarousel);

//     return res.status(200).json({ message: "Imagen eliminada correctamente" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Error al eliminar la imagen" });
//   }
// };