import { createPool } from 'mysql';

const pool = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const databaseServiceFactory = () => {
    const TABLE = 'User';
  
    const getUser = async (username) => {
      return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${TABLE} WHERE nombre = ?`, [username], (error, results) => {
          if (error) {
            reject(error);
            return;
          }
  
          if (results.length === 0) {
            reject(new Error('User not found'));
            return;
          }
  
          resolve(results[0]);
        });
      });
    };
  
    return { getUser };
  };
  
  module.exports = { databaseServiceFactory };
  