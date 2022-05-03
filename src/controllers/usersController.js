const controller = {

    //Controlador del login de usuarios

    login: (req, res) => {
        res.status(200).render("./users/Login");
    },

    //Controlador del registro de usuarios

    register: (req, res) => {
        res.status(200).render("./users/Register");
    }
}

module.exports = controller;