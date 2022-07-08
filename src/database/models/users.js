module.exports = (sequelize, dataTypes) => {
    let alias = 'users';
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
        surname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        username: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        category: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(100),
            allowNull: true,
            defaultValue: 'NULL'
        },
        birthday: {
            type: dataTypes.DATEONLY,
            allowNull: true,
            defaultValue: 'NULL'
        },
        provincia: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        postal: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        newsletter: {
            type: dataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 'NULL'
        },
        phone: {
            type: dataTypes.STRING(25),
            allowNull: false
        },
        sex: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }

    const users = sequelize.define(alias, cols, config); 

    users.associate = function(models) {

        //Relacion 1 usuario/ 1 categoria
        users.belongsTo(models.u_categories, {
            foreignKey: 'category',
            as: 'u_category'
        })
        
        //Relacion 1 usuario/ 1 provincia
        users.belongsTo(models.u_provincias, {
            foreignKey: 'provincia',
            as: 'u_provincia'
        })

        //Relacion 1 usuario/ 1 sexo
        users.belongsTo(models.u_sex, {
            foreignKey: 'sex',
            as: 'u_sexo'
        })

    }

    return users
};