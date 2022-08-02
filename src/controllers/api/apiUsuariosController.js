const db = require('../../database/models');

const controller = {

//Controladores para desplegar los usuarios

    list: async function(req, res){
        try {
            let users = await db.users.findAll();
            arrUsers = [];
            users.forEach(user => {
                arrUsers.push({
                    id: user.id,
                    name: `${user.name} ${user.surname}`,
                    email: user.email,
                    detail: `http://localhost:3000/api/usuarios/${user.id}`
                })
            })
            res.json({
                status: 200,
                count: users.length,
                users: arrUsers
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }
    },

    detail: async function (req, res) {

        try {
            let user = await db.users.findOne({
                where: {
                    id: req.params.id
                },
                include: ['u_provincia', 'u_sexo']
            })
            res.json({
                status: 200,
                user: {
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    birthday: user.birthday,
                    provincia: user.dataValues.u_provincia.name,
                    newsletter: user.newsletter,
                    sex: user.dataValues.u_sexo.name
                },
                imagen: user.img
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }

    }
}

module.exports = controller;