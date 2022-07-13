const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');                //cambiar
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


function cookieCheckLogin (req, res, next){

    if(req.cookies.cookieRecordar){

        let id = cryptr.decrypt(req.cookies.cookieRecordar);
        db.users.findOne({
            where: {
                id: id
            }
        })
            .then(function(user) {
                req.session.userLogeado = {
                    user: user.username,
                    img: user.img,
                    cat: user.category
                }
            })
        }
    next();
}

module.exports = cookieCheckLogin;