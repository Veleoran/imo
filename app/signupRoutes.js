const express = require('express');
const UsersRepository = require('../public/src/repository/UsersRepository');
const User = require('../public/src/entity/Users');
const signupRouter = express.Router();

// Importez ici UsersRepository pour l'utiliser dans la route

// Route POST pour l'inscription
signupRouter.post('/', async (req, res) => {
    try {
        const { email, password, genre, lastname, firstname, phone } = req.body;

        // Créez un nouvel objet User ici avec les informations du formulaire
        const user = new User(email, password, genre, lastname, firstname, phone);
        
        // Enregistrement de l'utilisateur dans la base de données
        const userId = await UsersRepository.createUser(user);

        // Si tout se passe bien, redirigez vers la page de succès avec l'ID de l'utilisateur
        res.redirect(`/successPage?userId=${userId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Une erreur est survenue lors de l\'inscription.');
    }
});

module.exports = signupRouter;