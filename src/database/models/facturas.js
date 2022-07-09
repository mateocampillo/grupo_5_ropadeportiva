module.exports = (sequelize, dataTypes) => {
    let alias = 'facturas';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_cliente: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        fecha_compra: {
            type: dataTypes.DATE,
            allowNull: false
        },
        total: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
    };
    let config = {
        tableName: 'facturas',
        timestamps: false
    }

    const facturas = sequelize.define(alias, cols, config); 

    facturas.associate = function(models) {

        //Relacion 1 cart/ 1 factura
        facturas.belongsTo(models.cart, {
            foreignKey: 'id',
            as: 'cart'
        })

    }

    return facturas
};