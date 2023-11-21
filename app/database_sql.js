const mysql = require('mysql2');

const pool = mysql.createPool({
    host     : process.env.SQL_HOST || 'localhost',
    user     : process.env.SQL_USER || 'root',
    password : process.env.SQL_PASSWORD || '',
    port     : process.env.SQL_PORT || 3306,
    database : process.env.SQL_DBNAME || 'immoneuf',
    multipleStatements: process.argv[2] === 'migration' || false
});

const getConnection = () => {
    return pool.promise().getConnection();
};

module.exports = {
    getConnection,
    pool
};
