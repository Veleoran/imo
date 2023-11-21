const express = require('express');
const router = express.Router();

// Importation des contrôleurs
const HomeController = require('../src/controllers/HomeController');
const RegisterController = require('../src/controllers/RegisterController');
const AuthenticationController = require('../src/controllers/AuthenticationController');

// Instanciation des contrôleurs
const homeController = new HomeController(); // Rendu singleton (une seule instance)
const registerController = new RegisterController(); // Rendu singleton
const authenticationController = new AuthenticationController(); // Rendu singleton

// Routes pour HomeController
router.get('/', homeController.index.bind(homeController));

// Routes pour RegisterController
router.get('/inscription', registerController.index.bind(registerController));
router.post('/inscription', registerController.process.bind(registerController));

// Routes pour AuthenticationController
router.get('/connexion', authenticationController.index.bind(authenticationController));
router.post('/connexion', authenticationController.process.bind(authenticationController));

module.exports = router;