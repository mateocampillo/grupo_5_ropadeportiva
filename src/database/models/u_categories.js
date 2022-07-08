module.exports = (sequelize, dataTypes) => {
    let alias = 'u_categories';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };
    let config = {
        tableName: 'u_categories',
        timestamps: false
    }

    const u_categories = sequelize.define(alias, cols, config); 

    u_categories.associate = function (models) {

        //Relacion 1 categoria/ muchos usuarios
        u_categories.hasMany(models.users, {
            foreignKey: 'category',
            as: 'u_category'
        })
        
    }

    return u_categories
};