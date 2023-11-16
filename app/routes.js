const HomeController = require('../public/controllers/HomeController');
let homeController = new HomeController();

module.exports = (app) => {
    app.get('/', (request, response) => {
        homeController.home(request, response);
    });

    // Ajoutez d'autres routes ici
};
