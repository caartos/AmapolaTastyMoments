import { query } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getEspecial(req, res);
    case "POST":
      return await postEspecial(req, res);
    case "PUT":
      return await updateEspecial(req, res)
    case "DELETE":
      return await deleteEspecial(req, res)
  }
}

const getEspecial = async (req, res) => {
  const todosLosEspeciales = await query("SELECT * FROM BocadillosEspeciales", {});
  return res.status(200).json(todosLosEspeciales);
};

const postEspecial = async (req, res) => {
  const { nombre,descripcion, precio } = req.body;
  const result = await query("INSERT INTO BocadillosEspeciales SET ?", {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio
  });
  return res.status(200).json({ result });
};

  const updateEspecial = async (req, res) => {
    const { nombre, descripcion, precio } = req.body;
    try {
      await query("UPDATE BocadillosEspeciales SET? WHERE nombre = ?", [
        req.body,
        req.body.nombre,
      ]);
      return res.status(204).json("Bocadillo Especial Actualizado");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEspecial = async (req, res) => {
    const nombre = req.query.nombre
    const result = await query("DELETE FROM BocadillosEspeciales WHERE nombre = ?",nombre
    );
    return res.status(204).json();
  };
