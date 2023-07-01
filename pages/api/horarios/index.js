import { query } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
  case 'GET':
    return await getHorarios(req,res)
  case'PUT':
    return await updateHorario(req, res)
  case'DELETE':
    // Lógica para la solicitud DELETE
    res.status(200).json({ message: 'Solicitud DELETE recibida' });
}}

const getHorarios = async(req, res) => {
  const todasLasImagenes = await query("SELECT * FROM Horarios",{});

    return res.status(200).json(todasLasImagenes);
}

const updateHorario = async(req, res) => {
  const {dia, turnoMañana, turnoTarde} = req.body;
  
  try{
    await query("UPDATE Horarios SET? WHERE dia = ?", [req.body, req.body.dia])
    return res.status(204).json("Horario Actualizado")
  } catch (error) {
    console.error(error)
  }
}