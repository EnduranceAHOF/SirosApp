module.exports = (sequelize, DataTypes) => {
    const Medico = sequelize.define(
        //Nombre de la tabla
        'medico', {
            //Atributos del modelo Medico
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            id_consulta: {
                type: DataTypes.INTEGER,
                references: 'consulta',
                referencesKey: 'id'
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

            especialidad: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        }
    );

    return Medico;
};