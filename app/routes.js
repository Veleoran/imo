const express = require('express');
const router = express.Router();

// Chemins relatifs ajustés pour correspondre à la structure du projet
const HomeController = require('../public/controllers/HomeController');
const RegisterController = require('../public/controllers/RegisterController');
const userController = require('./userController'); // 'app' est le dossier courant pour routes.js

// Instanciation des contrôleurs
let homeController = new HomeController();
let registerController = new RegisterController();

// Définition des routes
router.get('/', (request, response) => {
    homeController.home(request, response); // Utilisez .home si c'est le nom correct de la méthode dans HomeController
});
router.get('/register', (request, response) => {
    registerController.getRegisterForm(request, response); // Assurez-vous que cette méthode est bien définie dans RegisterController
});
router.post('/register', userController.registerUser); // Assurez-vous que cette méthode est bien définie dans userController

module.exports = router;