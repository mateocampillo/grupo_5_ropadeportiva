const req = require("express/lib/request");
const fs = require("fs");

let usersEnJSON = fs.readFileSync(__dirname + "/../data/Users.json","utf-8");
let usersArray = JSON.parse(usersEnJSON);

const controller = {

    //Controlador del login de usuarios

    login: (req, res) => {
        res.status(200).render("./users/Login");
    },

    //Controlador del registro de usuarios

    register: (req, res) => {
        res.status(200).render("./users/Register");
    },

    add: (req, res) => {
        const body = req.body;
        let userNuevo = {
            name: body.txtName,
            surname: body.txtSurname,
            email: body.txtMail,
            username: body.txtUser,
            password: body.txtPassword,
            birthday: body.dateCumple,
            sex: body.radioSex,
            phone: body.numberTel,
            provincia: body.optProvincias,
            address: body.txtStreet,
            floor: body.txtMailFloor,
            postal: body.txtPostal,
            newsletter: body.chkNewsletter
        }
        usersArray.push(userNuevo);
        let usersAgregado = JSON.stringify(usersArray);
        fs.writeFileSync(__dirname + "/../data/Users.json", usersAgregado);
        res.redirect("/");
    }
}

module.exports = controller;