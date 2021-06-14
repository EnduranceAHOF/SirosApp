module.exports = (sequelize, DataTypes) => {
    const Consulta = sequelize.define(
        //Nombre de la tabla
        'medico', {
            //Atributos del modelo Medico
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            id_paciente: {
                type: DataTypes.INTEGER,
                references: 'paciente',
                referencesKey: 'id'
            },
            id_formulario: {
                type: DataTypes.INTEGER,
                references: 'formulario',
                referencesKey: 'id'
            },
        }
    );
    return Consulta;
};