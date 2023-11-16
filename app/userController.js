class UserController {
    constructor(service) {
        this.service = service;
    }

    async getUser(req, res) {
        try {
            const users = await this.service.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Ajoutez d'autres méthodes ici
}

module.exports = UserController;
