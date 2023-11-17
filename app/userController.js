// Importation de la connexion à la base de données, si nécessaire
const con = require('./database_sql'); // Assurez-vous que le chemin est correct

class UserController {
    constructor() {
       
    }

    async getUser(req, res) {
        try {
            const users = await this.service.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async checkEmailExists(email) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT COUNT(*) AS count FROM users WHERE email = ?', [email], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results[0].count > 0);
            });
        });
    }

    async registerUser(req, res, next) {
        try {
            const emailExists = await this.checkEmailExists(req.body.email);
            if (emailExists) {
                return res.status(409).send('Cet email est déjà enregistré.');
            }
            // Logique pour enregistrer l'utilisateur...
        } catch (error) {
            next(error);
        }
    }
    // Ajoutez d'autres méthodes ici si nécessaire
}

module.exports = new UserController(); // Ajoutez `service` si nécessaire, ou enlevez-le si vous ne l'utilisez pas