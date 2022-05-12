const req = require("express/lib/request");
const fs = require("fs");

let usersEnJSON = fs.readFileSync(__dirname + "/../data/Users.json","utf-8");
let usersArray = JSON.parse(usersEnJSON);

const controller = {

    //Controlador del login de usuarios

    login: function(req, res){
        res.status(200).render("./users/Login");
    },

    //Controlador del registro de usuarios

    register: function(req, res){
        res.status(200).render("./users/Register");
    },

    add: function(req, res){
        const body = req.body;
        let userNuevo = {
            id: 1,
            name: body.txtName,
            surname: body.txtSurname,
            email: body.txtMail,
            username: body.txtUser,
            password: body.txtPassword,
            img: req.file.filename,
            birthday: body.dateCumple,
            sex: body.radioSex,
            phone: body.numberTel,
            provincia: body.optProvincias,
            address: body.txtStreet,
            floor: body.txtMailFloor,
            postal: body.txtPostal,
            newsletter: null
        }
        //
        if(usersArray.length > 0){
            userNuevo.id = usersArray.length + 1;
        }
        //
        let imgVerification = userNuevo.img.includes(".jpg");
        if(imgVerification == false){
            userNuevo.img = "imgUserDefault.jpg"
        }
        //
        if(body.chkNewsletter == undefined){
            userNuevo.newsletter = false;
        } else {
            userNuevo.newsletter = true;
        }
        //
        usersArray.push(userNuevo);
        let usersAgregado = JSON.stringify(usersArray);
        fs.writeFileSync(__dirname + "/../data/Users.json", usersAgregado);
        res.status(201).redirect("/");
    },

    //Controlador de recuperar contraseña

    recoverGet: function(req, res){
        res.status(200).render("./users/Recover.ejs", {users: usersArray});
    },
    recoverPatch: function(req, res){
        const body = req.body;
        usersArray.forEach(user => {
            if(user.email == body.txtRecEmail){
                user.password = body.txtRecPass;
            }
        });
        let passCambiada = JSON.stringify(usersArray);
        fs.writeFileSync(__dirname + "/../data/Users.json", passCambiada);
        res.status(201).redirect("/");
    }
}

module.exports = controller;