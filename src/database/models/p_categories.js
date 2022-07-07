module.exports = (sequelize, dataTypes) => {
    let alias = 'p_categories';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(15),
            allowNull: false
        }
    };
    let config = {
        tableName: 'p_categories',
        timestamps: false
    }

    const p_categories = sequelize.define(alias, cols, config); 

    p_categories.associate = function (models) {

        //Relacion 1 categoria/ muchos productos
        p_categories.hasMany(models.products, {
            foreignKey: 'category',
            as: 'p_category'
        })

    }

    return p_categories
};