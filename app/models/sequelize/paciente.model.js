module.exports = (sequelize, DataTypes) => {
    const Paciente = sequelize.define(
        //Nombre de la tabla
        'paciente', {
            //Atributos del modelo Paciente
            id: {
                type: DataTypes.STRING(50),
                allowNull: false,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            apellido: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            rut: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            direccion: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            telefono: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
        }
    );

    return Paciente;
};