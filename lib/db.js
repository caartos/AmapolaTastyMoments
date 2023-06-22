import { createPool } from 'mysql';

const pool = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
export const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    // Obtiene una conexión de la pool
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      // Ejecuta la consulta SQL con los valores proporcionados
      connection.query(sql, values, (error, results) => {
        // Libera la conexión
        connection.release();

        if (error) {
          reject(error);
          return;
        }

        resolve(results);
      });
    });
  });
};  



