const con = require('../../app/database_sql.js');
module.exports = class UserRepository {

    async add(user) {
        await con.promise().query('INSERT INTO `users` SET ?', user);
    }

    async existsEmail(email) {
        return await con.promise().query('SELECT * FROM `users` WHERE ?', { email }).then((result) => { 
            return (result[0].length > 0);
        });
    }

    async getUserByEmail(email) {
        return await con.promise().query('SELECT * FROM `users` WHERE ?', { email }).then((result) => { 
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }
    
};