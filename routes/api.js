const router = require('express').Router();

const middleware = require('./middlewares');
const apiUsersRouter = require('./api/auth');
const apiMedicoRouter = require('./api/apiMedico');
const apiPacienteRouter = require('./api/apiPaciente');
const apiConsultaRouter = require('./api/apiConsulta');
const apiFormularioRouter = require('./api/apiFormulario');
//const apiOrderRouter = require('./api/orders');

router.use('/auth', apiUsersRouter);
router.use('/medico', middleware.checkToken, apiMedicoRouter);
router.use('/paciente', middleware.checkToken, apiPacienteRouter);
router.use('/consulta', middleware.checkToken, apiConsultaRouter);
router.use('/formulario', middleware.checkToken, apiFormularioRouter);
//router.use('/order', middleware.checkToken, apiOrderRouter);

module.exports = router;