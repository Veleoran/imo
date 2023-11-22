class DashboardController {
    index(request, response) {
        // Rendre la vue du dashboard située dans le répertoire admin
        response.render('admin/dashboard/index', { route: request.path });    }
}

// Exporter l'instance du contrôleur
module.exports =  DashboardController;