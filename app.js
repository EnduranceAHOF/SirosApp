const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();

require('./db');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('benja ctm inutil')
})

app.listen(3001, () => {
    console.log('Servidor arrancado!');
});