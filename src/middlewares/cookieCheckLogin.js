// const bcrypt = require('bcryptjs');
// const db = require('../database/models');
// const sequelize = db.sequelize;
// const { Op } = require("sequelize");


// function cookieCheckLogin (req, res, next){

//     if(req.cookies.cookieRecordar){
        


//         db.users.findOne({
//             where: {
//                 id: 
//             }
//         })
//             .then(function(user) {
//                 req.session.userLogeado = {
//                     user: user.username,
//                     img: user.img,
//                     cat: user.category
//                 }
//             })
//     }
//     next();

//     if(req.cookies.cookieRecordar){
//         usersArray.forEach(user => {
//             if(bcrypt.compareSync(user.id.toString(), req.cookies.cookieRecordar)){
//                 req.session.userLogeado = {
//                     user: user.username,
//                     img: user.img,
//                     cat: user.category
//                 }
//             }
//         });
//     }
//     next();
// }

// module.exports = cookieCheckLogin;