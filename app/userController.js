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
        const [rows] = await con.query('SELECT COUNT(*) AS count FROM users WHERE email = ?', [email]);
        return rows[0].count > 0;
    }

    async registerUser(req, res, next) {
        try {
            // Vérifier si l'e-mail existe déjà
            const emailExists = await this.checkEmailExists(req.body.email);
            
            if (emailExists) {
                // Si l'e-mail existe, informer l'utilisateur
                return res.status(409).send('Cet email est déjà enregistré.');
            }

            // Ici, vous ajouteriez la logique pour créer le nouvel utilisateur
            // ...

        } catch (err) {
            // Passer l'erreur au middleware de gestion des erreurs
            next(err);
        }
    }

    // Ajoutez d'autres méthodes ici si nécessaire
}

module.exports = new UserController(); // Ajoutez `service` si nécessaire, ou enlevez-le si vous ne l'utilisez pas