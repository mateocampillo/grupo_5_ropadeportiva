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
            defaultValue: '1'
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    }

    const products = sequelize.define(alias, cols, config); 

    products.associate = function(models) {

        //Relacion 1 producto/ 1 categoria
        products.belongsTo(models.p_categories, {
            foreignKey: 'category',
            as: 'p_category'
        })

        //Relacion 1 producto/ 1 tipo
        products.belongsTo(models.p_types, {
            foreignKey: 'type',
            as: 'p_type'
        })

        //Relacion 1 producto/ 1 talla
        products.belongsTo(models.p_sizes, {
            foreignKey: 'size',
            as: 'p_size'
        })

        //Relacion 1 producto/ 1 tela
        products.belongsTo(models.p_cloths, {
            foreignKey: 'cloth',
            as: 'p_cloth'
        })

        //Relacion 1 producto/ 1 color
        products.belongsTo(models.p_colors, {
            foreignKey: 'color',
            as: 'p_color'
        })

    }

    return products
};