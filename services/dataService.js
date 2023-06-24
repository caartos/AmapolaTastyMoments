import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "amapola",
});

const databaseServiceFactory = () => {
  const TABLE = 'User';

  const getUser = async (username) => {
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query(`SELECT * FROM ${TABLE} WHERE nombre = ?`, [username]);
      connection.release();

      if (results.length === 0) {
        throw new Error('User not found');
      }

      return results[0];
    } catch (error) {
      throw error;
    }
  };

  return { getUser };
};

module.exports= { databaseServiceFactory };
