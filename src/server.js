const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const cookieCheckLogin = require('./middlewares/cookieCheckLogin')


// Carpeta pública para archivos estáticos.
app.use(express.static("./public"));
app.use("/static", express.static('./static/'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({secret: "tododeportes"}));                 // despues encriptar
app.use(cookieParser());
app.use(cookieCheckLogin);

// Seteo para utilizar el template engine EJS
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

app.listen(3000, () => { console.log("Servidor abierto en el puerto 3000") });

//imports
const main = require("./routes/main");
const productos = require("./routes/productos");
const users = require("./routes/users");
const apiProductos = require('./routes/api/productos');
const apiUsuarios = require('./routes/api/usuarios');

// Index de rutas
app.use("/", main);
app.use("/productos", productos)
app.use("/users", users);
app.use('/api/productos', apiProductos);
app.use('/api/usuarios', apiUsuarios);

//Error 404
app.use((req, res, next) => {
    res.status(404).render("./error/not-found");
});