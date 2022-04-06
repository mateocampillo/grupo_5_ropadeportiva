const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.listen(3000, () => { console.log("Servidor abierto en el puerto 3000") });

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/Index.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/Login.html"));
});

app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/Register.html"));
});

app.get("/detalle-producto", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/ProductDetail.html"));
});

app.get("/carrito", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/ProductCart.html"));
});