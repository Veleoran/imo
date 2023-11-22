const express = require('express')
const app = express()
const path = require("path")
const session = require('express-session');
const flash = require('express-flash-messages');
require('dotenv').config();




//--------------------------------------------------------------------
//      Ajout du midlleware express session
//--------------------------------------------------------------------
app.use(session({
    secret: process.env.APP_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
}));
//--------------------------------------------------------------------
//      Middleware pour créer une session "fake" ou de développement
//--------------------------------------------------------------------
app.use((req, res, next) => {
    if (req.session.recentlyDisconnected) {
        console.log('Session récemment déconnectée détectée');
        delete req.session.recentlyDisconnected; // Nettoyer l'indicateur
        return next();
    }
    next();
});



// if (process.env.APP_ENV === 'dev') {
//     app.use((req, res, next) => {
//         console.log('Middleware de session "fake" pour le développement exécuté');
//         if (!req.session.user && !req.session.recentlyDisconnected) {
//             req.session.user = {
//                 id: 11,
//                 email: 'lzholh2ky@mozmail.com',
//                 civility: '1',
//                 lastname: 'toto',
//                 firstname: 'toto'
//             };
//             console.log('Session "fake" pour l\'utilisateur créée');
//         }
//         next();
//     });
// }

//--------------------------------------------------------------------
//      transférer les sessions à toutes les vues (templates)
//--------------------------------------------------------------------
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
})


//--------------------------------------------------------------------
//      Ajout du midlleware express flash messages
//--------------------------------------------------------------------
app.use(flash());
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

//--------------------------------------------------------------------
//      Configuration templating
//--------------------------------------------------------------------
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

;
const router = require('./app/routes'); // Assurez-vous que le chemin est correct
app.use(router); // Utilisez le routeur avec app.use()


//--------------------------------------------------------------------
//     Mise en écoute du serveur HTTP
//--------------------------------------------------------------------
app.listen(process.env.PORT, () => {
    console.log('Démarrage du serveur sur le port:', process.env.PORT);
    if(process.env.APP_ENV) {
        console.log(`Le serveur HTTP est : http://localhost:${process.env.PORT}`);
    }
})