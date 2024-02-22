import express from 'express';
import morgan from 'morgan';
import employeerRouter from './routes/employee.routes.js';

import {config} from 'dotenv';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('src/public'));
config()


// app.use((req, res, next) => {
//     res.setHeader('Refresh', '25'); // Establece la cabecera Refresh para recargar la página cada 20 segundos
//     next();
// });

app.use('', employeerRouter);

export default app;