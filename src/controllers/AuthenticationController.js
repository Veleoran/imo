const UserRepository = require('../repository/UserRepository.js');
const bcrypt = require('bcryptjs');

class AuthenticationController {

    index(request, response) {
        response.render('authentication/index');
    }

    process(request, response) {
        // Étapes pour valider la connexion d'un utilisateur
        const UserRepo = new UserRepository();
        UserRepo.getUserByEmail(request.body.email).then(infosUser => {
            if (infosUser) {
                if (bcrypt.compareSync(request.body.password, infosUser.password)) {
                    request.session.user = {
                        id: infosUser.id,
                        civility: infosUser.civility,
                        firstname: infosUser.firstname,
                        lastname: infosUser.lastname,
                        email: infosUser.email
                    };
                    request.flash('notify', 'Vous êtes maintenant connecté.');
                    response.redirect('/');
                } else {
                    response.render('authentication/index', { error: "Identifiants incorrects", email: request.body.email });
                }
            } else {
                response.render('authentication/index', { error: "Identifiants incorrects", email: request.body.email });
            }
        }).catch(error => {
            console.error(error);
            response.status(500).send('Erreur interne du serveur.');
        });
    }

    deconnect(request, response) {
        console.log('Session existante:', request.session); // Log pour débuter le processus
        request.flash('notify', 'Vous êtes maintenant déconnecté.');
        console.log('Message flash ajouté'); // Log après ajout du message flash
        request.session.recentlyDisconnected = true;
        request.session.destroy(err => {
            console.log('Destruction de la session'); // Log quand on tente de détruire la session
            if (err) {
                console.error('Erreur de destruction de session', err); // Log en cas d'erreur
            } else {
                console.log('Session détruite'); // Log si la destruction a réussi
            }
            response.redirect('/');
        });
    }
}

module.exports = AuthenticationController;