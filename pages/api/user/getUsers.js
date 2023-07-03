import { query } from "../../../lib/db";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUsers(req, res);
    case "POST":
      return await postUser(req, res);
  }
}

const getUsers = async (req, res) => {
  const todosLosUsuarios = await query("SELECT * FROM User", {});

  return res.status(200).json(todosLosUsuarios);
};

const postUser = async (req, res) => {
  const { nombre, contraseña } = req.body;


  bcrypt.hash(contraseña, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al encriptar la contraseña' });
      return;
    }
    const result = query("INSERT INTO User SET ?", {
    nombre: nombre,
    contraseña: hashedPassword,
  });
  return res.status(200).json({ result });
    })  
};
