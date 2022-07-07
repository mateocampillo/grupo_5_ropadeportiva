module.exports = (sequelize, dataTypes) => {
    let alias = 'p_cloths';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };
    let config = {
        tableName: 'p_cloths',
        timestamps: false
    }
    
    const p_cloths = sequelize.define(alias, cols, config); 

    p_cloths.associate = function (models) {

        //Relacion 1 tela / muchos productos
        p_cloths.hasMany(models.products, {
            foreignKey: 'cloth',
            as: 'p_cloth'
        })

    }

    return p_cloths
};