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
    return p_colors
};