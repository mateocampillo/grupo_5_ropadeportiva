module.exports = (sequelize, dataTypes) => {
    let alias = 'p_categories';
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
        tableName: 'p_categories',
        timestamps: false
    }

    const p_categories = sequelize.define(alias, cols, config); 
    return p_categories
};