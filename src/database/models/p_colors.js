module.exports = (sequelize, dataTypes) => {
    let alias = 'p_colors';
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
        tableName: 'p_colors',
        timestamps: false
    }

    const p_colors = sequelize.define(alias, cols, config); 

    p_colors.associate = function (models) {

        //Relacion 1 color / muchos productos
        p_colors.hasMany(models.products, {
            foreignKey: 'color',
            as: 'p_color'
        })

    }

    return p_colors
};