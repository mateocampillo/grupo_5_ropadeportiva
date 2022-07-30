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

            let categories = [];
            for (let { category } of productos) {
                categories[category] = (categories[category] || 0) + 1;
            }

            res.json({
                total: productos.length,
                status: 200,
                countByCategory: {
                    hombres: categories[1],
                    mujeres: categories[2],
                    infantil: categories[3]
                },
                data: productos
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }
    }
}

module.exports = controller;