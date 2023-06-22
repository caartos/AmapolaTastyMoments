import { query } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
  case 'GET':
    return await getTiposDeProducto(req,res)
  case'POST':
  return await postTipoDeProducto(req,res)
  case'DELETE':
    // Lógica para la solicitud DELETE
    res.status(200).json({ message: 'Solicitud DELETE recibida' });
 
}}

const getTiposDeProducto = async(req, res) => {
  const todasLosTiposDeProducto = await query("SELECT * FROM Carta",{});

    return res.status(200).json(todasLosTiposDeProducto);
}
const postTipoDeProducto = async(req, res) => {
    const result = await query("INSERT INTO amapola.Carta SET ?",{
      tipoDeProducto: "pepe",
    });

    return res.status(200).json({ result });  
}