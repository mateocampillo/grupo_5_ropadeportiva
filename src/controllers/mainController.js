const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controller = {

    //Controlador que muestra el index de localhost:3000

    index: function(req, res){
        db.products.findAll({
            where: {
                active: 1
            }
        })
            .then(function(productosDB) {
                res.status(200).render("./main/index", {productos: productosDB});
            })
            .catch(function(err){
                console.log(err);
                res.render('./error/error-general')
            })
    },

        //Controlador que muestra la seccion de administrador de la pagina

    admin: function(req, res){
        let promesaProductos = db.products.findAll();
        let promesaUsuarios = db.users.findAll();
        Promise.all([promesaProductos, promesaUsuarios])
            .then(function(resultados) {
                res.status(200).render("./main/admin", {productos: resultados[0], users: resultados[1]});
            })
            .catch(function(err){
                console.log(err)
            })
    },

    cookies: function(req, res){
        res.clearCookie('connect.sid');
        res.clearCookie('cookieRecordar');
        res.redirect('/');
    }
}

module.exports = controller;