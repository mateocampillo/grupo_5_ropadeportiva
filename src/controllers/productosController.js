const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');                //cambiar
const moment = require('moment')
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs/dist/bcrypt');
const { validationResult } = require('express-validator');

const controller = {

//Controladores para desplegar los productos

    list: function(req, res){
        db.products.findAll({
            where: {
                active: 1
            }
        })
            .then(function(products) {
                res.status(200).render("./products/ProductList", {productos: products})
            })
            .catch(function(err) {
                console.log(err);
                res.status(500).render('./error/error-general')
            })

    },
    detalle: function(req, res){
        db.products.findOne({
            where: {
                id: req.params.id
            },
            include: ['p_category', 'p_cloth', 'p_color', 'p_size', 'p_type']
        })
            .then(function(producto) {
                res.status(200).render("./products/ProductDetail", {producto: producto});
            })
            .catch(function(err) {
                console.log(err);
                res.status(500).render('./error/error-general');
            })
    },

//Controladores para el carrito

    cart: async function(req, res){
        try{
            let productos = await db.products.findAll({
                where: {
                    active: 1
                }
            });
            res.status(200).render("./products/ProductCart", {productos: productos});
        }
        catch (error){
            console.log(error);
            res.status(500).render('./error/error-general');
        }
    },

    sold: async function(req, res) {

        let id = cryptr.decrypt(req.cookies.cookieRecordar);
        let productosSpliteados = req.body.arrInputProductos.split(',').toString();
        let datetime = moment().tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DD HH:mm:ss');
        try{
            await db.facturas.create({
                id_cliente: id,
                fecha_compra: datetime,
                total: req.body.inputTotal,
                id_productos: productosSpliteados
            })
            res.status(200).redirect('/');
        }
        catch(error){
            console.log(error);
            res.status(500).render('./error/error-general');
        }

    },

//Controladores para la seccion de agregar productos

    add: function(req, res){
        res.status(200).render("./products/ProductAdd");
    },
    added: function(req, res){

        let errors = validationResult(req);

        if(errors.isEmpty()) {

            db.products.create({
                name: req.body.txtAddName,
                descripcion: req.body.txtAddDesc,
                category: req.body.radioAddCat,
                price: req.body.numAddPrice,
                type: req.body.radioAddType,
                size: req.body.radioAddSize,
                waist: req.body.txtAddWaist,
                waist: req.body.txtAddWaist,
                chest: req.body.txtAddChest,
                back: req.body.txtAddBack,
                height: req.body.txtAddHeight,
                cloth: req.body.radioAddCloth,
                color: req.body.radioAddColor,
                code: req.body.txtAddCode,
                img1: req.files[0].filename,
                img2: req.files[1].filename,
                img3: req.files[2].filename,
                img4: req.files[3].filename,
                active: 1
            })
                .catch(function(err) {
                    console.log(err);
                })
                res.status(201).redirect("/");

        } else {

            res.status(400).render("./products/ProductAdd", {errors: errors.errors, old: req.body});

        }

    },

//Controladores para la seccion de edicion de productos

    edit: function(req, res){
        db.products.findOne({
            where: {
                id: req.params.id
            },
            include: ['p_category', 'p_cloth', 'p_color', 'p_size', 'p_type']
        })
            .then(function(producto) {
                res.status(200).render("./products/ProductEdit", {producto: producto});
            })
            .catch(function(err) {
                console.log(err);
                res.status(500).render('./error/error-general');
            })
    },
    save: function(req, res){

        let errors = validationResult(req);

        if(errors.isEmpty()) {

            if(req.files != ''){
                db.products.update({
                    name: req.body.txtNuevoName,
                    description: req.body.txtNuevoDesc,
                    category: req.body.radioNuevoCat,
                    price: req.body.numNuevoPrice,
                    type: req.body.radioNuevoType,
                    size: req.body.radioNuevoSize,
                    waist: req.body.txtNuevoWaist,
                    chest: req.body.txtNuevoChest,
                    back: req.body.txtNuevoBack,
                    height: req.body.txtNuevoHeight,
                    cloth: req.body.radioNuevoCloth,
                    color: req.body.radioNuevoColor,
                    code: req.body.txtNuevoCode,
                    img1: req.files[0].filename,
                    img2: req.files[1].filename,
                    img3: req.files[2].filename,
                    img4: req.files[3].filename,
                    active: req.body.radioNuevoActive
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                    .catch(function(err) {
                        console.log(err);
                        res.status(500).render('./error/error-general')
                    })
                
                res.status(201).redirect("/");
            } else if (req.files == '') {
                db.products.update({
                    name: req.body.txtNuevoName,
                    description: req.body.txtNuevoDesc,
                    category: req.body.radioNuevoCat,
                    price: req.body.numNuevoPrice,
                    type: req.body.radioNuevoType,
                    size: req.body.radioNuevoSize,
                    waist: req.body.txtNuevoWaist,
                    chest: req.body.txtNuevoChest,
                    back: req.body.txtNuevoBack,
                    height: req.body.txtNuevoHeight,
                    cloth: req.body.radioNuevoCloth,
                    color: req.body.radioNuevoColor,
                    code: req.body.txtNuevoCode,
                    active: req.body.radioNuevoActive
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                    .catch(function(err) {
                        console.log(err);
                        res.status(500).render('./error/error-general')
                    })
        
                res.status(201).redirect("/");
            }

        } else {

            db.products.findOne({
                where: {
                    id: req.params.id
                },
                include: ['p_category', 'p_cloth', 'p_color', 'p_size', 'p_type']
            })
                .then(function(producto) {
                    res.status(400).render("./products/ProductEdit", {errors: errors.errors, old: req.body, producto: producto});
                })
                .catch(function(err) {
                    console.log(err);
                    res.status(500).render('./error/error-general');
                })

        }

    },

//Controladores para borrar productos

    delete: function(req, res){

        db.products.update({
            active: 2
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(function() {
                res.status(202).redirect("/admin");
            })
            .catch(function(err) {
                console.log(err);
            })

        // ESTE CODIGO LO BORRA DE LA DB, PERO PREFIERO USAR EL DEL ARRIBA QUE SIMPLEMENTE LO DESACTIVA, PERO NO SE BORRA
        // db.products.destroy({
        //     where: {
        //         id: req.params.id
        //     }
        // })
        //     .then(function() {
        //         res.status(202).redirect("/admin");
        //     })
        //     .catch(function(err) {
        //         console.log(err);
        //     })

    }
}

module.exports = controller;