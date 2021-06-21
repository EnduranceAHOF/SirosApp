const router = require('express').Router();

const middleware = require('./middlewares');
const apiUsersRouter = require('./api/auth');
//const apiProductsRouter = require('./api/productos');
//const apiOrderRouter = require('./api/orders');

router.use('/auth', apiUsersRouter);
//router.use('/productos', middleware.checkToken, apiProductsRouter);
//router.use('/order', middleware.checkToken, apiOrderRouter);


module.exports = router;