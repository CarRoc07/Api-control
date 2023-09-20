import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/auth.routes.js';
import productsRouter from './routes/products.routes.js';
import cors from 'cors'

const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 200
}));

app.use(express.json());

app.use(morgan('dev'));

app.use('/', authRouter);

app.use('/api', productsRouter);

export default app;
