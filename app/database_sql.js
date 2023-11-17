// Importation du module mysql
const mysql = require('mysql2');

// Création du pool de connexions MySQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',       // L'adresse de l'hôte de la base de données
    user: 'root',            // Votre nom d'utilisateur pour la base de données
    password: '',    // Votre mot de passe pour la base de données
    database: 'immoneuf',
    multipleStatements: process.argv[2] === 'migration' || false // Le nom de votre base de données
     // Ajoutez d'autres configurations au besoin
}).promise();

// Fonction pour récupérer une connexion à partir du pool
function getConnection(callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            return callback(err);
        }
        callback(null, connection);
    });
}

// Exportation du pool ou de la fonction getConnection selon vos besoins
module.exports = {
    getConnection, // si vous souhaitez obtenir des connexions individuelles
    // ou simplement le pool si vous allez l'utiliser directement
    pool
};