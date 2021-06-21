module.exports = (sequelize, DataTypes) => {
    return sequelize.define('formulario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
    });
}