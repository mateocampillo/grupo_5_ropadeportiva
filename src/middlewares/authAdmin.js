function authAdmin (req, res, next){
    if(req.session.userLogeado && req.session.userLogeado.cat == 1){
        next();
    } else {
        res.render("./error/permisos");
    }
}

module.exports = authAdmin;