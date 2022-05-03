const req = require("express/lib/request");
const fs = require("fs");
let productosEnJSON = fs.readFileSync(__dirname + "/../models/Productos.json","utf-8");

const controller = {

        //Controlador para desplegar pregunto segun el id pasado en la ruta

    detalle: (req, res) => {
        let productos = JSON.parse(productosEnJSON);
        res.status(200).render("./products/ProductDetail", {productos: productos[req.params.id-1]});
    },

        //Controladores para el carrito

    cart: (req, res) => {
        res.status(200).render("./products/ProductCart");
    },

        //Controladores para la seccion de agregar productos

    add: (req, res) => {
        let arrProductos = JSON.parse(productosEnJSON);
        let lengthArr = arrProductos.length
        res.status(200).render("./products/ProductAdd", {idDeProximo: lengthArr+1});
    },
    added: (req, res) => {
        const body = req.body;
        let prodAdded = {
            id: body.numAddId,
            name: body.txtAddName,
            description: body.txtAddDesc,
            category: body.radioAddCat,
            price: body.numAddPrice,
            type: body.radioAddType,
            size: body.radioAddSize,
            waist: body.txtAddWaist,
            chest: body.txtAddChest,
            back: body.txtAddBack,
            height: body.txtAddHeight,
            cloth: body.radioAddCloth,
            color: body.radioAddColor,
            code: body.txtAddCode
        }
        res.status(200).render("./products/ProductAdded");
        let arrProductos = JSON.parse(productosEnJSON);
        arrProductos.push(prodAdded);
        let prodEnJson = JSON.stringify(arrProductos);
        fs.writeFileSync(__dirname + "/../models/Productos.json", prodEnJson);
    },

        //Controladores para la seccion de edicion de productos

    edit: (req, res) => {
        let arrayProductos = JSON.parse(productosEnJSON);
        res.status(200).render("./products/ProductEdit", {productos: arrayProductos[req.params.id-1]});
    },
    save: (req, res) => {
        const body = req.body;
        let prodNuevo = {
            id: body.numNuevoId,
            name: body.txtNuevoName,
            description: body.txtNuevoDesc,
            category: body.radioNuevoCat,
            price: body.numNuevoPrice,
            type: body.radioNuevoType,
            size: body.radioNuevoSize,
            waist: body.txtNuevoWaist,
            chest: body.txtNuevoChest,
            back: body.txtNuevoBack,
            height: body.txtNuevoHeight,
            cloth: body.radioNuevoCloth,
            color: body.radioNuevoColor,
            code: body.txtNuevoCode
        }
        res.status(200).render("./products/ProductSave");
        let productos = JSON.parse(productosEnJSON);
        productos.splice(prodNuevo.id-1, 1, prodNuevo);
        let productosEditados = JSON.stringify(productos);
        fs.writeFileSync(__dirname + "/../models/Productos.json", productosEditados);
    }
}

module.exports = controller;