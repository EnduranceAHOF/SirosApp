const router = require('express').Router();

const { check, validationResult }  = require('express-validator');
const { Productos } = require('../../db');

router.get('/', async (req, res) => {
    const productos = await Productos.findAll();
    res.json(productos);
});

router.put('/:id', async (req, res) => {
    
    await Productos.update(req.body, {
        where: { id: req.params.id}
    });

    res.json({ success: 'Se ha modificado' });
    
});

router.post('/', [
    check('nombre', 'El nombre del producto es necesario').not().isEmpty(),
    check('precio', 'El precio es necesario').not().isEmpty(),
    check('categoria', 'La Categoria es necesaria').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    
    const product = await Productos.create(req.body);
    res.json(product);
    
});

module.exports = router;