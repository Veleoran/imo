const UserRepository = require('../repository/UserRepository.js');

class UserController {
    index(request, response) {
        console.log('Affichage de la liste des utilisateurs...');
        const repo = new UserRepository();
        repo.getUsers().then((users) => {
            response.render('admin/user/index', { users, route: request.path });
        }).catch((error) => {
            console.error(error);
            response.status(500).send('Erreur lors de la récupération des utilisateurs.');
        });
    }
    getCreateForm(request, response) {
        // Assurez-vous d'avoir un fichier Pug pour cette vue dans 'templates/admin/users/create.pug'
        response.render('admin/user/create', { route: request.path });
    }

    create(request, response) {
        const userData = request.body;
        const repo = new UserRepository();
        repo.add(userData).then(() => {
            request.flash('notify', "L'utilisateur a été créé.");
            response.redirect('/admin/users');
        }).catch(error => {
            console.error(error);
            response.status(500).send('Erreur lors de la création de l’utilisateur.');
        });
    }

    getEditForm(request, response) {
        // TODO: Implémentez la logique pour afficher le formulaire d'édition avec les données de l'utilisateur
        
        const userId = request.params.userId;
        const repo = new UserRepository();
        repo.getUserById(userId).then((user) => {
            if (user) {
                response.render('admin/user/edit', { user, route: request.path });
            } else {
                request.flash('error', "L'utilisateur n'existe pas.");
                response.redirect('/admin/users');
            }
        }).catch(error => {
            console.error(error);
            response.status(500).send('Erreur lors de la récupération de l’utilisateur.');
        });
    }
    
    update(request, response) {
        // TODO: Implémentez la logique pour mettre à jour l'utilisateur
        const userId = request.params.userId;
        const updatedUserData = request.body;
        const repo = new UserRepository();
        repo.updateUser(userId, updatedUserData).then(() => {
            request.flash('notify', "L'utilisateur a été mis à jour.");
            response.redirect('/admin/users');
        }).catch(error => {
            console.error(error);
            response.status(500).send('Erreur lors de la mise à jour de l’utilisateur.');
        });
    }

    delete(request, response) {
        const repo = new UserRepository();
        repo.deleteUser(request.params.id).then(() => { // Assurez-vous que request.params.id corresponde à la définition de votre route
            request.flash('notify', "L'utilisateur a bien été supprimé.");
            response.redirect('/admin/users'); // Assurez-vous ici que le chemin est correct par rapport à votre structure de route et de fichier Pug
        });
    }
}

module.exports = UserController;