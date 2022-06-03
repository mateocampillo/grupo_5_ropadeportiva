const fs = require("fs");
const bcrypt = require("bcryptjs")

let usersEnJSON = fs.readFileSync(__dirname + "/../data/Users.json","utf-8");
let usersArray = JSON.parse(usersEnJSON);

const controller = {

    //Controlador del login de usuarios

    loginGet: function(req, res){
        if(req.session.userLogeado){
            res.redirect("/users/perfil");
        } else {
            res.status(200).render("./users/Login", {err: undefined});
        }
    },
    loginPost: function(req, res){
        const body = req.body;
        usersArray.forEach(user => {
            if(body.emailUserEmail == user.email && bcrypt.compareSync(body.txtPassword, user.password)){
                req.session.userLogeado = {
                    user: user.username,
                    img: user.img
                }
            }
        });
        if(req.session.userLogeado != undefined){
            res.status(200).redirect("/users/perfil");
        } else {
            res.status(200).render("./users/Login", {err: "Credenciales invalidas"});
        }
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
            password: bcrypt.hashSync(body.txtPassword, 10),
            img: "imgUserDefault.jpg",
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
            if(user.email == body.txtRecEmail && user.phone == body.txtRecTel){
                user.password = bcrypt.hashSync(body.txtRecPass, 10);
            }
        });
        let passCambiada = JSON.stringify(usersArray);
        fs.writeFileSync(__dirname + "/../data/Users.json", passCambiada);
        res.status(201).redirect("/");
    },

    //Controlador para el despliege de la info del usuario

    perfil: function (req, res){
        usersArray.forEach(user => {
            if(user.username == req.session.userLogeado.user){
                res.status(200).render("./users/Profile", {user: user});
            }
        });
    },
    perfilImg: function(req, res){
        usersArray.forEach(user => {
            if(user.username == req.session.userLogeado.user){
                user.img = req.file.filename;
                let imgActualizada = JSON.stringify(usersArray);
                fs.writeFileSync(__dirname + "/../data/Users.json", imgActualizada);
            }
        });
    res.status(201).redirect("/users/perfil");
    }
}

module.exports = controller;