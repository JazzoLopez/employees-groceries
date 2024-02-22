import express from 'express';
import morgan from 'morgan';
import employeerRouter from './routes/employee.routes.js';

import {config} from 'dotenv';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

config()

<<<<<<< HEAD
app.use((req, res, next) => {
    res.setHeader('Refresh', '30'); // Establece la cabecera Refresh para recargar la página cada 20 segundos
    next();
});

app.use('', employeerRouter);
=======

app.use('/', productsRouter);
>>>>>>> 167ffd94dc647bcb21c02998c4d3308c75cdb63e

export default app;