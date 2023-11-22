// src/controllers/ContactController.js
class ContactController {
    index(request, response) {
        // TODO: Récupérer les informations de contact depuis la base de données ou autre
        response.render('admin/contact/index', {
            // Passer les informations de contact à la vue Pug ici, si nécessaire
        });
    }
}

module.exports = ContactController;