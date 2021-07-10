const router = require('express').Router();

const { Consulta } = require('../../db');

const { check, validationResult } = require('express-validator');

router.get('/', async(req, res) => {
    const consulta = await Consulta.findAll();
    res.json(consulta);
});

router.put('/:id', async(req, res) => {

    await Consulta.update(req.body, {
        where: { id: req.params.id }
    });

    res.json({ success: 'Se ha modificado' });

});

router.post('/', [
    check('idMedico', 'El id del Medico es necesario').not().isEmpty(),
    check('idPaciente', 'El id del Paciente es necesario').not().isEmpty(),
    check('fecha', 'La fecha de la consulta es necesaria').not().isEmpty(),

], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    const con = await Consulta.create({ fecha: req.body.fecha, medicoId: req.body.idMedico, pacienteId: req.body.idPaciente });
    res.json(con);

});

module.exports = router;