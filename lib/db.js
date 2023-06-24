import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "amapola",
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



