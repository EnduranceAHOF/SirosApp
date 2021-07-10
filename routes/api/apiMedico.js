const router = require('express').Router();

const { Medico } = require('../../db');

const { check, validationResult } = require('express-validator');

router.get('/', async(req, res) => {
    const medico = await Medico.findAll();
    res.json(medico);
});

router.put('/:id', async(req, res) => {

    await Medico.update(req.body, {
        where: { id: req.params.id }
    });

    res.json({ success: 'Se ha modificado' });

});

router.post('/', [
    check('nombre', 'El nombre del Medico es necesario').not().isEmpty(),
    check('apellido', 'El apellido del Medico es necesario').not().isEmpty(),
    check('rut', 'El RUT del Medico es necesario').not().isEmpty(),
    check('direccion', 'La direccion del Medico es necesaria').not().isEmpty(),
    check('telefono', 'El telefono del Medico es necesario').not().isEmpty(),
    check('especialidad', 'La especialidad del Medico es necesaria').not().isEmpty()
], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    const med = await Medico.create(req.body);
    res.json(med);

});

module.exports = router;