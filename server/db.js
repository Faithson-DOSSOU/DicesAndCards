import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

export const pool = mysql.createPool({
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:     process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
pool.getConnection()
    .then(conn => {
        console.log("Connexion à la base de données réussie !");
        conn.release();
    })
    .catch(err => {
        console.error("Erreur de connexion à la base de données :", err);
    });