const express = require("express");
const app = express();
const path = require("path");


// Carpeta pública para archivos estáticos.
app.use(express.static("./public"));
app.use("/static", express.static('./static/'));
app.use(express.urlencoded());


// Seteo para utilizar el template engine EJS
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

app.listen(3000, () => { console.log("Servidor abierto en el puerto 3000") });

//imports
const main = require("./routes/main");
const productos = require("./routes/productos");
const users = require("./routes/users");

// Index de rutas
app.use("/", main);
app.use("/productos", productos)
app.use("/users", users);