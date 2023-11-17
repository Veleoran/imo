// Importez le module de configuration d'environnement et la connexion de la base de données
require('dotenv').config();
const con = require('./app/database_sql');

// Utiliser la méthode .query() directement sur con, car con est déjà le pool de promesses
con.query("SELECT 'connexion SQL OK'")
  .then(([rows]) => {
    console.log('Résultat de la requête :', Object.values(rows[0]));
    process.exit();
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données :', error);
    process.exit();
  });