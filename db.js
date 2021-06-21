const Sequelize = require('sequelize');

const UserModel = require('./models/user');
const ConsultaModel = require('./models/consulta');
const MedicoModel = require('./models/medico');
const PacienteModel = require('./models/paciente');
const FormularioModel = require('./models/formulario');
const RespuestasModel = require('./models/respuestas');

const sequelize = new Sequelize('admin_sirosapp', 'admin_sirosapp', 'Siros.2021', {
    host: '104.194.215.119',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
const Consulta = ConsultaModel(sequelize, Sequelize);
const Medico = MedicoModel(sequelize, Sequelize);
const Paciente = PacienteModel(sequelize, Sequelize);
const Formulario = FormularioModel(sequelize, Sequelize);
const Respuestas = RespuestasModel(sequelize, Sequelize);

Medico.hasMany(Consulta, {
    onDelete: 'cascade',
});

Consulta.belongsTo(Medico, {
    foreingKey: 'id'
});

Consulta.hasMany(Paciente, {
    onDelete: 'cascade',
});

Paciente.belongsTo(Consulta, {
    foreingKey: 'id'
});

Consulta.hasMany(Formulario, {
    onDelete: 'cascade',
});

Formulario.belongsTo(Consulta, {
    foreingKey: 'id'
});

Formulario.hasMany(Respuestas, {
    onDelete: 'cascade'
});

Respuestas.belongsTo(Formulario, {
    foreingKey: 'id'
});

Medico.belongsTo(User, {
    foreingKey: 'id'
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabla Sincronizada')
    })

module.exports = {
    User,
    Consulta,
    Medico,
    Paciente,
    Formulario,
    Respuestas
}