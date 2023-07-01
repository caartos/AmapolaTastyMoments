import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.NEXT_HOST,
  user: process.env.NEXT_USER,
  password: process.env.NEXT__PASSWORD,
  database: process.env.NEXT_DATABASE,
  ssl:{
    rejectUnauthorized: false
  }
});

export const query = (sql, values) => {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(sql, values);
      connection.release();
      resolve(results);
    } catch (error) {
      reject(error);
    }
  });
};

// // Leer el archivo SQL
// const createTableSQL = fs.readFileSync('amapola.sql', 'utf8');

// // Ejecutar el script SQL para crear la tabla
// (async () => {
//   try {
//     await query(createTableSQL);
//     console.log('Tabla creada exitosamente');
//   } catch (error) {
//     console.error('Error al ejecutar el script SQL: ' + error.stack);
//   }
// })();



