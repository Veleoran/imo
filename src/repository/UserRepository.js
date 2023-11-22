// Importer la fonction getConnection
const { getConnection } = require('../../app/database_sql.js');

module.exports = class UserRepository {

    async add(user) {
        // Utiliser getConnection pour obtenir une nouvelle connexion promisifiée
        const connection = await getConnection();
        try {
            await connection.query('INSERT INTO `users` SET ?', user);
        } finally {
            // Assurez-vous de libérer la connexion
            connection.release();
        }
    }

    async existsEmail(email) {
        const connection = await getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM `users` WHERE email = ?', [email]);
            return rows.length > 0;
        } finally {
            connection.release(); // Libérer la connexion dans le `finally`
        }
    }
    async getUsers() {
        const connection = await getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM `users`');
            return rows; // Pas nécessaire de vérifier la longueur ici si vous voulez tous les utilisateurs
        } finally {
            // Assurez-vous de libérer la connexion après l'utilisation
            connection.release();
        }
    }

    async getUserByEmail(email) {
        const connection = await getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM `users` WHERE email = ?', [email]);
            return rows.length > 0 ? rows[0] : null;
        } finally {
            connection.release(); // Libérer la connexion dans le `finally`
        }
    }
};