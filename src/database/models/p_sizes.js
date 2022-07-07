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
    return p_sizes
};