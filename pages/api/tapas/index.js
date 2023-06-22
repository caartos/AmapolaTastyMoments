import { query } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getTapas(req, res);
    case "POST":
      return await postTapa(req, res);
    case "PUT":
      return await updateTapa(req, res)
    case "DELETE":
      return await deleteTapa(req, res)
  }
}

const getTapas = async (req, res) => {
  const todasLasTapas = await query("SELECT * FROM Tapas", {});

  return res.status(200).json(todasLasTapas);
};

const postTapa = async (req, res) => {
  const { nombre,descripcion, precio } = req.body;
  const result = await query("INSERT INTO Tapas SET ?", {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio
  });
  return res.status(200).json({ result });
};

  const updateTapa = async (req, res) => {
    const { nombre,descripcion, precio } = req.body;
    try {
      await query("UPDATE Tapas SET? WHERE nombre = ?", [
        req.body,
        req.body.nombre,
      ]);
      return res.status(204).json("Tapa Actualizada");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTapa = async (req, res) => {
    const nombre = req.query.nombre
    const result = await query("DELETE FROM Tapas WHERE nombre = ?",nombre
    );
    return res.status(204).json();
  };
