const router = require('express').Router();

const { Formulario } = require('../../db');

const { check, validationResult } = require('express-validator');

router.get('/', async(req, res) => {
    const formulario = await Formulario.findAll();
    res.json(formulario);
});

router.put('/:id', async(req, res) => {

    await Formulario.update(req.body, {
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

    const form = await Formulario.create(req.body);
    res.json(form);

});

module.exports = router;