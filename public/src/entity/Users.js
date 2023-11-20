class User {
    constructor(email, password, genre, lastname, firstname, phone) {
        this.email = email;
        this.password = password;
        this.genre = genre; // '1' ou '2'
        this.lastname = lastname;
        this.firstname = firstname;
        this.phone = phone;
    }
}

module.exports = User;