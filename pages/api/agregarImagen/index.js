import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), 'public/carousel'); // Directorio de destino de las imágenes
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al subir la imagen' });
      return;
    }

    const file = files.image;
   
    const filePath = file.filepath;
    
    const fileName = file.newFilename + ".jpg" 
    
    // Mueve la imagen al directorio "public/carousel"
  
    fs.renameSync(filePath, path.join(form.uploadDir, fileName));
   

    res.status(200).json({ message: 'Imagen agregada correctamente' });
  });

}


