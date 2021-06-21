module.exports = (sequelize, DataTypes) => {
    const Medico = sequelize.define(
        //Nombre de la tabla
        'medico', {
            //Atributos del modelo Medico
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
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
                unique: true,
            },
            direccion: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            telefono: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },

            especialidad: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        }
    );

    return Medico;
};