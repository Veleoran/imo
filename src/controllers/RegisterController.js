const User = require('../entity/User.js');
const UserRepository = require('../repository/UserRepository.js');
const MailRegister = require('../services/MailRegister');
const bcrypt = require('bcryptjs');

class RegisterController {

    index (request, response) {
        response.render('register/index')
    }

    process(request, response) {

        let entity = new User();
        entity.setEmail(request.body.email)
            .setPassword(bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10)))
            .setCivility(request.body.civility)
            .setLastname(request.body.lastname)
            .setFirstname(request.body.firstname)
            .setPhone(request.body.phone)

        const UserRepo = new UserRepository();
        UserRepo.existsEmail(entity.getEmail()).then(emailexists => {
            // console.log(emailexists);
            if(emailexists) {
                // on renvoi le formulaire avec une erreur
                response.render('register/index', {
                    error : `L'adresse Email existe déjà dans notre base de données.`,
                    email : entity.getEmail(),
                    civility : entity.getCivility(),
                    lastname: entity.getLastname(),
                    firstname: entity.getFirstname(),
                    phone: entity.getPhone()
                });
            } else {
                // On enregistre en BDD
                UserRepo.add(entity).then(() => {
                    MailRegister(entity).then(() => {
                        request.flash('notify', 'Votre compte a bien été créé.');
                        response.redirect('/');
                    })
                });

            }
        })
    }
};

module.exports =  RegisterController;