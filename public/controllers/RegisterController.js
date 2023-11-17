module.exports = class RegisterController {
    // Méthode pour afficher le formulaire d'inscription
    getRegisterForm(request, response) {
        // Utilisez le chemin relatif 'register/form' pour rendre le fichier form.pug
        // situé dans le dossier 'templates\register'
        response.render('register/form');
    }

    // Vous pouvez ajouter ici d'autres méthodes liées à l'enregistrement si nécessaire
};
