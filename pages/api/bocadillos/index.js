import { query } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
  case 'GET':
  return await getBocadillos(req,res)
  case 'POST':
  return await postBocadillo(req,res)
  case 'PUT':
    return await updateBocadillo(req,res)
  case'DELETE':
  return await deleteBocadillo(req,res)
}}

const getBocadillos = async(req, res) => {
  const result = await query("SELECT * FROM Bocadillos",{});
    
    return res.status(200).json(result);
}

const postBocadillo = async (req, res) => {
  const { nombre, precio } = req.body;
  const result = await query("INSERT INTO Bocadillos SET ?", {
    nombre: req.body.nombre,
    precio: req.body.precio
  });
  return res.status(200).json({ result });
};

  const updateBocadillo = async (req, res) => {
    const { nombre, precio } = req.body;

    try {
      await query("UPDATE Bocadillos SET? WHERE nombre = ?", [
        req.body,
        req.body.nombre,
      ]);
      return res.status(204).json("Bocadillo Actualizada");
    } catch (error) {
      console.error(error);
    }
  };

const deleteBocadillo = async (req, res) => {
  const nombre = req.query.nombre
  const result = await query("DELETE FROM Bocadillos WHERE nombre = ?",nombre
  );
  return res.status(204).json();
};