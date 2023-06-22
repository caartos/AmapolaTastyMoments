import { query } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getTostadas(req, res);
    case "POST":
      return await postTostada(req, res);
    case "PUT":
      return await updateTostada(req, res)
    case "DELETE":
      return await deleteTostada(req, res)
  }
}

const getTostadas = async (req, res) => {
  const todasLasTostadas = await query("SELECT * FROM amapola.Tostadas", {});

  return res.status(200).json(todasLasTostadas);
};

const postTostada = async (req, res) => {
  const { nombre, precio } = req.body;
  const result = await query("INSERT INTO amapola.Tostadas SET ?", {
    nombre: req.body.nombre,
    precio: req.body.precio
  });
  return res.status(200).json({ result });
};

  const updateTostada = async (req, res) => {
    const { nombre, precio } = req.body;

    try {
      await query("UPDATE Tostadas SET? WHERE nombre = ?", [
        req.body,
        nombre,
      ]);
      return res.status(204).json("Tostada Actualizada");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTostada = async (req, res) => {
    const nombre = req.query.nombre
    const result = await query("DELETE FROM Tostadas WHERE nombre = ?",nombre
    );
    return res.status(204).json();
  };
