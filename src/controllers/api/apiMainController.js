const db = require('../../database/models');

const controller = {

//Controladores para desplegar los productos

    list: async function(req, res){
        try {
            let ventas = await db.facturas.findAll()
            res.json({
                total: ventas.length,
                status: 200,
                data: ventas
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }
    }
}

module.exports = controller;