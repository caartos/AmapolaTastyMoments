import { query } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
  case 'GET':
    return await getPromociones(req,res)
  case'POST':
  return await postPromo(req,res)
  case'DELETE':
    // Lógica para la solicitud DELETE
    res.status(200).json({ message: 'Solicitud DELETE recibida' });
}}

const getPromociones = async(req, res) => {
  const todasLasImagenes = await query("SELECT * FROM amapola.Promociones",{});

    return res.status(200).json(todasLasImagenes);
}

const postPromo = async(req, res) => {
    const result = await query("INSERT INTO amapola.Promociones SET ?",{
      nombre: "pepe",
    })
    return res.status(200).json({ result });

}