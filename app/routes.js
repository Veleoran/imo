const express = require('express');
const router = express.Router();

// Importation des contrôleurs
const HomeController = require('../src/controllers/HomeController');
const RegisterController = require('../src/controllers/RegisterController');
const AuthenticationController = require('../src/controllers/AuthenticationController');
const DashboardController = require('../src/controllers/DashboardController');
const UserController = require('../src/controllers/UserController');
// const ContactController = require('../src/controllers/ContactController');
// Instanciation des contrôleurs
const homeController = new HomeController();
const registerController = new RegisterController();
const authenticationController = new AuthenticationController();
const dashboardController = new DashboardController();
const userController = new UserController();
// const contactController = new ContactController();

console.log('Les contrôleurs ont été chargés');
// Routes pour HomeController
router.get('/', homeController.index.bind(homeController));

// Routes pour RegisterController
router.get('/inscription', registerController.index.bind(registerController));
router.post('/inscription', registerController.process.bind(registerController));

// Routes pour AuthenticationController
router.get('/connexion', authenticationController.index.bind(authenticationController));
router.post('/connexion', authenticationController.process.bind(authenticationController));

// Route pour la déconnexion
router.get('/deconnexion', authenticationController.deconnect.bind(authenticationController));

// Routes pour la partie admin
router.get('/admin', dashboardController.index.bind(dashboardController));

// Routes pour le UserController
router.get('/admin/users', userController.index.bind(userController));

router.get('/admin/users/create', userController.getCreateForm.bind(userController));

router.post('/admin/users/create', userController.create.bind(userController));

router.get('/admin/users/edit/:userId', userController.getEditForm.bind(userController));

router.post('/admin/users/update/:userId', userController.update.bind(userController));

router.get('/admin/users/delete/:id([0-9]+)', userController.delete.bind(userController));
// router.get('/admin/contact', contactController.index.bind(contactController));

module.exports = router;