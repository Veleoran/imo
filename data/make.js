// require('dotenv').config();
// const con = require('../app/database_sql.js');
// const fs = require('fs');
// const path = require("path");
// const allSql = [];
// fs.readdir('./data/', (err, files) => {
//     if (err) {
//         console.error('Erreur lors de la lecture du répertoire :', err);
//         return;
//     }
//     // Filtrer les fichiers ayant l'extension .sql
//     const sqlFiles = files.filter(file => path.extname(file) === '.sql');

//     sqlFiles.forEach(sqlFile => {
//         const sqlQuery = fs.readFileSync(path.join(__dirname, sqlFile), 'utf-8');

//         // Exécuter le script SQL lu depuis le fichier
//         allSql.push(con.promise().query(sqlQuery).catch(()=>{}));
//     });
//     // on quitte le processus quand toute les requetes ont été eecutée
//     Promise.all(allSql).then((values) => { process.exit(); });
// });
require('dotenv').config();
const { pool } = require('../app/database_sql'); // Ajustez le chemin si nécessaire
const fs = require('fs');
const path = require('path');

async function runMigrations() {
    const sqlFiles = fs.readdirSync('./data/').filter(file => path.extname(file) === '.sql');

    // Boucle sur chaque fichier SQL et exécute les requêtes de manière séquentielle
    for (const sqlFile of sqlFiles) {
        const sqlQuery = fs.readFileSync(path.join(__dirname, sqlFile), 'utf-8');
        try {
            await pool.query(sqlQuery); // Utilisez await avec le pool promisifié pour exécuter les requêtes
        } catch (error) {
            console.error(`Erreur lors de l'exécution du fichier ${sqlFile}:`, error);
        }
    }

    console.log('Toutes les migrations ont été exécutées.');
    process.exit();
}

runMigrations();