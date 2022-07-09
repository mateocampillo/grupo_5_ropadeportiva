const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

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

    cart: function(req, res){
        res.status(200).render("./products/ProductCart");
    },

//Controladores para la seccion de agregar productos

    add: function(req, res){
        res.status(200).render("./products/ProductAdd");
    },
    added: function(req, res){

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