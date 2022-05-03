const fs = require("fs");
let productosEnJSON = fs.readFileSync(__dirname + "/../models/Productos.json","utf-8");

const controller = {
    detalle: (req, res) => {
        let productos = JSON.parse(productosEnJSON);
        res.status(200).render("./products/ProductDetail", {productos: productos[req.params.id-1]});
    },
    cart: (req, res) => {
        res.status(200).render("./products/ProductCart");
    },
    add: (req, res) => {
        res.status(200).render();
    },
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