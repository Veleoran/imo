const express = require('express');
const router = express.Router();

// Chemins relatifs ajustés pour correspondre à la structure du projet
const HomeController = require('../public/controllers/HomeController');
const RegisterController = require('../public/controllers/RegisterController');
const userController = require('./userController'); // 'app' est le dossier courant pour routes.js
const signupRoutes = require('./signupRoutes');

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
router.post('/register', userController.registerUser);

router.use('/signup', signupRoutes);
 // Assurez-vous que cette méthode est bien définie dans userController
//...
router.get('/successPage', (req, res) => {
    const userId = req.query.userId; // l'ID utilisateur renvoyé par la requête POST précédente
    res.render('successPage', { userId }); // Assurez-vous d'avoir un template Pug nommé 'successPage'
});
//...
module.exports = router;