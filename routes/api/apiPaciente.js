const router = require('express').Router();

const { Paciente } = require('../../db');

const { check, validationResult } = require('express-validator');

router.get('/', async(req, res) => {
    const paciente = await Paciente.findAll();
    res.json(paciente);
});

router.put('/:id', async(req, res) => {

    await Paciente.update(req.body, {
        where: { id: req.params.id }
    });

    res.json({ success: 'Se ha modificado' });

});

router.post('/', [
    check('nombre', 'El nombre del Paciente es necesario').not().isEmpty(),
    check('apellido', 'El apellido del Paciente es necesario').not().isEmpty(),
    check('rut', 'El RUT del Paciente es necesario').not().isEmpty(),
    check('direccion', 'La direccion del Paciente es necesaria').not().isEmpty(),
    check('telefono', 'El telefono del Paciente es necesario').not().isEmpty()
], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    const pac = await Paciente.create(req.body);
    res.json(pac);

});

module.exports = router;