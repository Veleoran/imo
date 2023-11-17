const express = require('express');
const app = express();
const path = require("path");
const sassMiddleware = require('node-sass-middleware');
const routes = require('./app/routes.js'); // Assurez-vous que le chemin est correct

require('dotenv').config();

// Configurations
app.set('view engine', 'pug');
app.set('views', './templates'); // Chemin vers les fichiers Pug

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/'));
app.use(sassMiddleware({
    src: path.join(__dirname, 'build'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    indentedSyntax: false,
    prefix: '/css'
}));

// Routes
app.use('/', routes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
