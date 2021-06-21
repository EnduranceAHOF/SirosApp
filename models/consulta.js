module.exports = (sequelize, DataTypes) => {
    const Consulta = sequelize.define(
        //Nombre de la tabla
        'consulta', {
            //Atributos del modelo Consulta
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            fecha: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        }
    );
    return Consulta;
};