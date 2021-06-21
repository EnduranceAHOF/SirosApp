const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult }  = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

router.post('/register', [
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('rol','El Rol es un campo protegido').isEmpty()
] , async (req, res) => {

    const existe = await User.findOne({ where: { email: req.body.email}});

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    if(existe != null) {
        return res.json({ error: 'Usuario ya existe' })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json({succes: true, uuid: user.id});

});


router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if(iguales) {
            res.json({ succes: createToken(user),uuid: user.id, rol: user.rol })
        } else {
            res.json({ error: 'Error en usuario y/o password'});
        }
    } else {
        res.json({ error: 'Error en usuario y/o password'});
    }
});

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(2, 'days').unix()
    }

    return jwt.encode(payload, 'cheesburger');
}

module.exports = router;