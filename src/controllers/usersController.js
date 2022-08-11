const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');                //cambiar
const bcrypt = require("bcryptjs")
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const fs = require('fs');

const controller = {

    //Controlador del login de usuarios

    loginGet: function(req, res){
        if(req.session.userLogeado){
            res.status(200).redirect("/users/perfil");
        } else {
            res.status(200).render("./users/Login", {err: undefined});
        }
    },
    loginPost: function(req, res){

        let errors = validationResult(req);

        if(errors.isEmpty()) {

            db.users.findOne({
                where: {
                    email: req.body.emailUserEmail,
                }
            })
            .then(function(user) {
                if(bcrypt.compareSync(req.body.txtPassword, user.password)){
                    req.session.userLogeado = {
                        user: user.username,
                        img: user.img,
                        cat: user.category
                    }
                    if(req.session.userLogeado != undefined){             // && req.body.chkRemember != undefined
                        let idEncriptada = cryptr.encrypt(user.id);
                        res.cookie('cookieRecordar', idEncriptada, {maxAge: 1000 * 60 * 60 * 24 * 3}) // 3 dias
                    }
                    res.status(200).render("./users/Profile", {user: user});
                } else {
                    res.status(401).render("./users/Login", {err: "Credenciales invalidas"});
                }
            })
            .catch(function(err) {
                console.log(err);
                res.status(401).render("./users/Login", {err: "Credenciales invalidas"});
            })

        } else {

            res.status(400).render("./users/Login", {errors: errors.errors, old: req.body, err: ""});

        }
        
    },

    //Controlador del registro de usuarios

    register: function(req, res){
        res.status(200).render("./users/Register");
    },

    add: function(req, res){

        if(req.body.chkNewsletter == undefined){
            var nl_add_user = false;
        } else {
            var nl_add_user = true;
        }

        let errors = validationResult(req);

        if(errors.isEmpty()) {

            db.users.create({
                name: req.body.txtName,
                surname: req.body.txtSurname,
                email: req.body.txtMail,
                username: req.body.txtUser,
                password: bcrypt.hashSync(req.body.txtPassword, 10),
                category: 2,
                img: 'imgUserDefault.jpg',
                birthday: req.body.dateCumple,
                provincia: req.body.optProvincias,
                address: req.body.txtStreet,
                postal: req.body.txtPostal,
                newsletter: nl_add_user,
                phone: req.body.numberTel,
                sex: req.body.radioSex
            })
                .then(function() {
                    res.status(201).redirect('/');
                })
                .catch(function(err) {
                    console.log(err);
                    res.status(500).render('./error/error-general');
                })

        } else {

            res.status(400).render("./users/Register", {errors: errors.errors, old: req.body});

        }

    },

    //Controlador de recuperar contraseña

    recoverGet: function(req, res){
        res.status(200).render("./users/Recover.ejs");
    },
    recoverPatch: function(req, res){

        let errors = validationResult(req);

        if(errors.isEmpty()) {

            db.users.update({
                password: bcrypt.hashSync(req.body.txtRecPass, 10)
            } , {
                where: {
                    email: req.body.txtRecEmail,
                    phone: req.body.txtRecTel
                }
            })
                .then(function() {
                    res.status(201).redirect("/users/login");
                })
                .catch(function(err) {
                    console.log(err);
                    res.status(500).render('./error/error-general')
                })

        } else {

            res.status(400).render("./users/Recover.ejs", {errors: errors.errors, old: req.body});

        }

    },

    //Controlador para el despliege de la info del usuario

    perfil: function (req, res){

        db.users.findOne({
            where: {
                username: req.session.userLogeado.user
            }
        })
            .then(function(user) {
                res.status(200).render("./users/Profile", {user: user});
            })
            .catch(function(err) {
                console.log(err);
                res.status(500).render('./error/error-general');
            })

    },
    perfilImg: function(req, res){

        let promesaOldImg = db.users.findOne({
            where: {
                username: req.session.userLogeado.user
            }
        });
        let promesaUpdateImg = db.users.update({
            img: req.file.filename
        } , {
            where: {
                username: req.session.userLogeado.user
            }
        });
        Promise.all([promesaOldImg, promesaUpdateImg])
            .then(function(resultados) {
                fs.unlink(`./public/images/Users/${resultados[0].dataValues.img}`, function (err) {
                    if(err) return console.log(err);
                    console.log('Archivo borrado con exito');
                });
                res.status(201).redirect("/users/perfil");
            })
            .catch(function(err){
                console.log(err);
                res.status(500).render('./error/error-general');
            })

        // db.users.update({
        //     img: req.file.filename
        // } , {
        //     where: {
        //         username: req.session.userLogeado.user
        //     }
        // })
        //     .then(function() {
        //         res.status(201).redirect("/users/perfil");
        //     })
        //     .catch(function(err) {
        //         console.log(err);
        //         res.status(500).render('./error/error-general');
        //     })
    }
}

module.exports = controller;