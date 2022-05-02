const fs = require("fs");

const controller = {
    detalle: (req, res) => {
        let productosEnJSON = fs.readFileSync(__dirname + "/../models/Productos.json","utf-8");
        let productos = JSON.parse(productosEnJSON);
        res.status(200).render("./products/ProductDetail", {productos: productos[req.params.id-1]});
    },
    cart: (req, res) => {
        res.status(200).render("./products/ProductCart");
    },
    edit: (req, res) => {
        res.status(200).render("./products/ProductEdit");
    }
}

module.exports = controller;