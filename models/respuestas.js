module.exports = (sequelize, DataTypes) => {
    return sequelize.define('respuestas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        respuesta: {
            type: DataTypes.TEXT,
        },
        nombre_pregunta: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        pregunta: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
}