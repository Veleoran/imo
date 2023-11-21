module.exports = class User {

    /**
     * @var Id utilisateur
     */
    id;

    /**
     * @var Email utilisateur
     */
    email;

    /**
     * @var Password en clair
     */
    password;

    /**
     * @var Civilité (enum  1 pour Monsieur, 2 pour Madame)
     */
    civility;

    /**
     * @var Nom de l'utilisateur
     */
    lastname;

    /**
     * @var Prénom de l'utilisateur
     */
    firstname;

    /**
     * @var Téléphone de l'utilisateur
     */
    phone;

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    getCivility() {
        return this.civility;
    }

    setCivility(civility) {
        this.civility = civility;
        return this;
    }

    getLastname() {
        return this.lastname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
        return this;
    }

    getFirstname() {
        return this.firstname;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
        return this;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }
};