module.exports = (sequelize, dataTypes) => {
    let alias = 'u_provincias';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'u_provincias',
        timestamps: false
    }

    const u_provincias = sequelize.define(alias, cols, config); 

    u_provincias.associate = function (models) {

        //Relacion 1 provincia/ muchos usuarios
        u_provincias.hasMany(models.users, {
            foreignKey: 'provincia',
            as: 'u_provincia'
        })
        
    }

    return u_provincias
};