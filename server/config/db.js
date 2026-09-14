import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test Database Connection
pool.getConnection()
  .then(async (connection) => {
    console.log('✅ DATABASE CONNECTED SUCCESSFULLY');

    // Check which database Render is actually using
    const [dbInfo] = await connection.query(
      'SELECT DATABASE() AS database_name'
    );

    console.log(
      '📌 DATABASE BEING USED:',
      dbInfo[0].database_name
    );

    // Check reviews table columns
    const [columns] = await connection.query(
      'DESCRIBE reviews'
    );

    console.log(
      '📋 REVIEWS TABLE COLUMNS:',
      columns.map((column) => column.Field)
    );

    connection.release();
  })
  .catch((error) => {
    console.error('❌ DATABASE CHECK ERROR:', error);
  });

export default pool;