const fs = require("fs");

let productosEnJSON = fs.readFileSync(__dirname + "/../data/Productos.json","utf-8");
let productos = JSON.parse(productosEnJSON);
let usersEnJSON = fs.readFileSync(__dirname + "/../data/Users.json","utf-8");
let usersArray = JSON.parse(usersEnJSON);


const controller = {

    //Controlador que muestra el index de localhost:3000

    index: (req, res) => {
        res.status(200).render("./main/index", {productos: productos});
    },

    admin: (req, res) => {
        res.status(200).render("./main/admin", {productos: productos, users: usersArray});
    }
}

module.exports = controller;