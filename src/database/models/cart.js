module.exports = (sequelize, dataTypes) => {
    let alias = 'cart';
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
        id_producto: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        cantidad_de_producto: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 1
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: false
        },
        activo: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },
        id_factura: {
            type: dataTypes.INTEGER(11),
            defaultValue: null
        },
    };
    let config = {
        tableName: 'cart',
        timestamps: false
    }

    const cart = sequelize.define(alias, cols, config); 

    cart.associate = function(models) {

        //Relacion 1 cart/ 1 factura
        cart.belongsTo(models.facturas, {
            foreignKey: 'id',
            as: 'facturas'
        })
        
        //Relacion 1 cart/ +1 products
        cart.hasMany(models.products, {
            foreignKey: 'id',
            as: 'products'
        })

        //Relacion 1 cart/ 1 usuario
        cart.belongsTo(models.users, {
            foreignKey: 'id',
            as: 'users'
        })

    }

    return cart
};