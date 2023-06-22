import { query } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getFocaccias(req, res);
    case "POST":
      return await postFocaccia(req, res);
    case "PUT":
      return await updateFocaccia(req, res)
    case "DELETE":
      return await deleteFocaccia(req, res)
  }
}

const getFocaccias = async (req, res) => {
  const todasLasFocaccias = await query("SELECT * FROM FocacciasRellenas", {});

  return res.status(200).json(todasLasFocaccias);
};

const postFocaccia = async (req, res) => {
  const { nombre,descripcion, precio } = req.body;
  const result = await query("INSERT INTO FocacciasRellenas SET ?", {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio
  });
  return res.status(200).json({ result });
};

  const updateFocaccia = async (req, res) => {
    const { nombre, descripcion, precio } = req.body;
    try {
      await query("UPDATE FocacciasRellenas SET? WHERE nombre = ?", [
        req.body,
        req.body.nombre,
      ]);
      return res.status(204).json("Focaccia Actualizada");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFocaccia = async (req, res) => {
    const nombre = req.query.nombre
    const result = await query("DELETE FROM FocacciasRellenas WHERE nombre = ?",nombre
    );
    return res.status(204).json();
  };
