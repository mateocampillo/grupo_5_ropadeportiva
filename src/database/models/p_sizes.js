module.exports = (sequelize, dataTypes) => {
    let alias = 'p_sizes';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(4),
            allowNull: false
        }
    };
    let config = {
        tableName: 'p_sizes',
        timestamps: false
    }

    const p_sizes = sequelize.define(alias, cols, config); 

    p_sizes.associate = function (models) {

        //Relacion 1 talla / muchos productos
        p_sizes.hasMany(models.products, {
            foreignKey: 'size',
            as: 'p_size'
        })

    }

    return p_sizes
};