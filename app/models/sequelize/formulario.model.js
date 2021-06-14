module.exports = (sequelize, type) => {
    return sequelize.define('formulario', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        email: type.STRING,
        password: type.STRING(150),
        rol: {
            type: type.INTEGER,
            defaultValue: 0,
            allowNull: false
        }
    });
}