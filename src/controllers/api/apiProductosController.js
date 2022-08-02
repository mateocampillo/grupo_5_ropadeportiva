const db = require('../../database/models');

const controller = {

//Controladores para desplegar los productos

    list: async function(req, res){
        try {
            let productos = await db.products.findAll({
                where: {
                    active: 1
                },
                include: ['p_category', 'p_cloth', 'p_color', 'p_size', 'p_type']
            })

            let categories = [];
            for (let { category } of productos) {
                categories[category] = (categories[category] || 0) + 1;
            }

            let arrProductos = [];
            productos.forEach(producto => {
                arrProductos.push({
                    id: producto.dataValues.id,
                    name: producto.dataValues.name,
                    descripcion: producto.dataValues.descripcion,
                    category: producto.dataValues.p_category.name,
                    price: producto.dataValues.price,
                    type: producto.dataValues.p_type.name,
                    size: producto.dataValues.p_size.name,
                    waist: producto.dataValues.waist,
                    chest: producto.dataValues.chest,
                    back: producto.dataValues.back,
                    height: producto.dataValues.height,
                    cloth: producto.dataValues.p_cloth.name,
                    color: producto.dataValues.p_color.name,
                    code: producto.dataValues.code,
                    active: producto.dataValues.active,
                    detail: `http://localhost:3000/api/productos/${producto.dataValues.id}`
                })
            })

            res.json({
                total: productos.length,
                status: 200,
                countByCategory: {
                    hombres: categories[1],
                    mujeres: categories[2],
                    infantil: categories[3]
                },
                data: arrProductos

            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }
    },

    detail: async function (req, res) {

        try {
            let producto = await db.products.findOne({
                where: {
                    id: req.params.id
                },
                include: ['p_category', 'p_cloth', 'p_color', 'p_size', 'p_type']
            })
            res.json({
                status: 200,
                data: {
                    id: producto.dataValues.id,
                    name: producto.dataValues.name,
                    descripcion: producto.dataValues.descripcion,
                    category: producto.dataValues.p_category.name,
                    price: producto.dataValues.price,
                    type: producto.dataValues.p_type.name,
                    size: producto.dataValues.p_size.name,
                    waist: producto.dataValues.waist,
                    chest: producto.dataValues.chest,
                    back: producto.dataValues.back,
                    height: producto.dataValues.height,
                    cloth: producto.dataValues.p_cloth.name,
                    color: producto.dataValues.p_color.name,
                    code: producto.dataValues.code,
                    active: producto.dataValues.active,
                },
                imagenes: {
                    imagen1:  producto.dataValues.img1,
                    imagen2:  producto.dataValues.img2,
                    imagen3:  producto.dataValues.img3,
                    imagen4:  producto.dataValues.img4,
                },
                relaciones: [
                    producto.dataValues.p_category.name, producto.dataValues.p_type.name, producto.dataValues.p_size.name, producto.dataValues.p_cloth.name, producto.dataValues.p_color.name
                ]
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }

    }
}

module.exports = controller;