const bcrypt = require('bcryptjs')
const fs = require('fs')
let usersEnJSON = fs.readFileSync(__dirname + "/../data/Users.json","utf-8");
let usersArray = JSON.parse(usersEnJSON);

function cookieCheckLogin (req, res, next){
    if(req.cookies.cookieRecordar){
        usersArray.forEach(user => {
            if(bcrypt.compareSync(user.id.toString(), req.cookies.cookieRecordar)){
                req.session.userLogeado = {
                    user: user.username,
                    img: user.img,
                    cat: user.category
                }
            }
        });
    }
    next();
}

module.exports = cookieCheckLogin;