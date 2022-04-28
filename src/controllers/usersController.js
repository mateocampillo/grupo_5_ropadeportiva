const controller = {
    login: (req, res) => {
        res.status(200).render("Login");
    },
    register: (req, res) => {
        res.status(200).render("Register");
    }
}

module.exports = controller;