module.exports = (sequelize, dataTypes) => {
    let alias = 'u_sex';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };
    let config = {
        tableName: 'u_sex',
        timestamps: false
    }

    const u_sex = sequelize.define(alias, cols, config); 

    u_sex.associate = function (models) {

        //Relacion 1 sexo / muchos usuarios
        u_sex.hasMany(models.users, {
            foreignKey: 'sex',
            as: 'u_sexo'
        })
        
    }

    return u_sex
};