const HomeController = require('../public/controllers/HomeController');
const RegisterController = require('../public/controllers/RegisterController');

let homeController = new HomeController();
let registerController = new RegisterController();

module.exports = (app) => {
    app.get('/', (request, response) => {
        homeController.home(request, response);
    });
    app.get('/register', (request, response) => {
        registerController.getRegisterForm(request, response);
    });
    // Ajoutez d'autres routes ici
};
