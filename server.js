const express = require('express');
const app = express();
const path = require("path");
const sassMiddleware = require('node-sass-middleware');// Correction de l'importation

require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', './templates'); // Assurez-vous que ce chemin pointe vers votre dossier contenant les fichiers Pug

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/'));


app.use(sassMiddleware({
    src: path.join(__dirname, 'build'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    indentedSyntax: false,
    prefix: '/css'  // Assurez-vous que ce chemin correspond à votre configuration
}));

const router = require('./app/routes.js');
router(app)
// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
