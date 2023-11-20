const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'immoneuf'
});

class UsersRepository {
    static async createUser(user) {
        const insertQuery = `
            INSERT INTO users (email, password, genre, lastname, firstname, phone)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        try {
            const { email, password, genre, lastname, firstname, phone } = user;
            console.log(email, password, genre, lastname, firstname, phone);
            const values = [email, password, genre, lastname, firstname, phone];
            const [result] = await pool.execute(insertQuery, values);
            return result.insertId;
        } catch (error) {
            console.error('Error in createUser:', error);
            throw error;  // Renvoyer l'erreur pour la gérer ultérieurement
        }
    }

    static async checkEmailExists(email) {
        try {
            const query = 'SELECT COUNT(*) AS count FROM users WHERE email = ?';
            const [rows] = await pool.execute(query, [email]);
            return rows[0].count > 0;
        } catch (error) {
            console.error('Error in checkEmailExists:', error);
            throw error;  // Renvoyer l'erreur pour la gérer ultérieurement
        }
    }
}

module.exports = UsersRepository;