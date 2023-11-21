class HomeController {
    index (request, response) {
        response.render('home/index');
    }
};

module.exports =  HomeController; 