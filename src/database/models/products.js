module.exports = (sequelize, dataTypes) => {
    let alias = 'products';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        type: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        size: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        waist: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        chest: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        back: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        height: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        cloth: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        color: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        code: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        img1: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        img2: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        img3: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        img4: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    }

    const products = sequelize.define(alias, cols, config); 
    return products
};