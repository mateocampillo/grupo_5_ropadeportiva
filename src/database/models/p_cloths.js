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
    return p_cloths
};