function authLogin (req, res, next){
    if(req.session.userLogeado){
        next();
    } else {
        res.redirect("/users/login");
    }
}

module.exports = authLogin;