import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: process.env.NEXT_PUBLIC_HOST,
//   user: process.env.NEXT_PUBLIC_USER,
//   password: process.env.NEXT_PUBLIC_PASSWORD,
//   database: process.env.NEXT_PUBLIC_DATABASE,
//   port: process.env.NEXT_PUBLIC_PORT,
// });

const pool = mysql.createPool({
  host: process.env.NEXT_HOST,
  user: process.env.NEXT_USER,
  password: process.env.NEXT__PASSWORD,
  database: process.env.NEXT_DATABASE,
  ssl:{
    rejectUnauthorized: false
  }
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
