import { query } from "../../../lib/db";
import formidable from "formidable";
import fs from "fs";
import path from "path";

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
  const todasLasImagenes = await query("SELECT * FROM amapola.Carousel", {});
  return res.status(200).json(todasLasImagenes);
};


const postImages = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), "public/carousel"); // Directorio de destino de las imágenes
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error al subir la imagen" });
      return;
    }

    const file = files.image;
    const filePath = file.filepath;
    const fileName = file.originalFilename;

    // Mueve la imagen al directorio "public/carousel"

    fs.renameSync(filePath, path.join(form.uploadDir, fileName));

    const result = query("INSERT INTO amapola.Carousel SET ?", {
      nombre: fileName,
      ruta: path.join(form.uploadDir, fileName),
    });
    return res.status(200).json({ result });
  });
};


const deleteImage = async (req, res) => {
  const idCarousel = req.query.idCarousel; // Supongamos que recibes el ID de la imagen a eliminar en el cuerpo de la solicitud

  try {
    // Obtener la ruta y el nombre del archivo de la base de datos
    const image = await query("SELECT * FROM amapola.Carousel WHERE idCarousel = ?", idCarousel);
    if (!image) {
      return res.status(404).json({ message: "La imagen no existe" });
    }
 
    const imagePath = image[0].ruta;
    // Eliminar el archivo de la carpeta
    fs.unlinkSync(imagePath);
    

    // Eliminar la entrada de la imagen de la base de datos
    const result = await query("DELETE FROM amapola.Carousel WHERE idCarousel = ?", idCarousel);

    return res.status(200).json({ message: "Imagen eliminada correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar la imagen" });
  }
};
