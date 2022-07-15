const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controller = {

//Controladores para desplegar los productos

    list: async function(req, res){
        try {
            let productos = await db.products.findAll({
                where: {
                    active: 1
                }
            })
            res.json({
                total: productos.length,
                data: productos,
                status: 200
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }
    }
}

module.exports = controller;