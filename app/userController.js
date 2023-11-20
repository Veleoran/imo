const bcrypt = require('bcryptjs');
const con = require('./database_sql'); // Assurez-vous que le chemin est correct
const UsersRepository = require('../public/src/repository/UsersRepository');
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

 
  
    async registerUser(req, res, next) {
        console.log(req.body);  // Inspectez le contenu de req.body
        try {
            const { email, password, genre, lastname, firstname, phone } = req.body;
            if(!email) {
                return res.status(400).send('L\'email est requis.');
            }
    
            const emailExists = await UsersRepository.checkEmailExists(email); // Utilisez UsersRepository
            if (emailExists) {
                return res.status(409).send('Cet email est déjà enregistré.');
            }
            
            // Créez un nouvel objet Utilisateur ici (ou juste utilisez les variables)
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);
            
            const newUser = {
                email, password: hashedPassword, genre, lastname, firstname, phone
            };
            const userId = await UsersRepository.createUser(newUser);
            
            res.redirect(`/successPage?userId=${userId}`); // Remplacez par le chemin approprié
        } catch (error) {
            next(error); // Utilisez le middleware d'erreur pour gérer l'erreur
        }
    }
    // ...autres méthodes...
}

module.exports = new UserController(); // Ajoutez `service` si nécessaire, ou enlevez-le si vous ne l'utilisez pas