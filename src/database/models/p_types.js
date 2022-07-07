module.exports = (sequelize, dataTypes) => {
    let alias = 'p_types';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(20),
            allowNull: false
        }
    };
    let config = {
        tableName: 'p_types',
        timestamps: false
    }

    const p_types = sequelize.define(alias, cols, config); 
    return p_types
};