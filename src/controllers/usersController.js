const controller = {
    login: (req, res) => {
        res.status(200).render("./users/Login");
    },
    register: (req, res) => {
        res.status(200).render("./users/Register");
    }
}

module.exports = controller;