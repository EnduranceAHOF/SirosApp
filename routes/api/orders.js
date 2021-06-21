const router = require('express').Router();

const { check, validationResult }  = require('express-validator');
const { Orders } = require('../../db');
const { product_order } = require('../../db');
const bodyParser = require('body-parser')


router.get('/', async (req, res) => {
    const orders = await Orders.findAll({
        include: [
            product_order
        ]
    });
    res.json(orders);
});

router.post('/', [
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    
    const order = await Orders.create({order_date: req.body.order_date , total_pago : req.body.total_pago});
    
    var i = 0;

    var carray = req.body.cantidad.split(",");
    var pid = req.body.productosid.split(",");

    while(pid[i] != null){

        await product_order.create({
            orderOrderId: order.order_id,
            cantidad: carray[i],
            productId: pid[i]
        });

        i++;
    }
    res.json(order);
    
});

module.exports = router;