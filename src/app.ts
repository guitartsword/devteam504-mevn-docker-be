import express from 'express';
import bodyParser from 'body-parser';
import itemTransactionsRouter from './item';
import inventarioRouter from './inventario';
import cors from 'cors';

const CORS_WHITELIST = process.env.CORS_WHITELIST?.split(',') || []

const app: express.Application = express();

app.use(bodyParser.json());
app.use(cors({
  origin: CORS_WHITELIST,
}))

app.use('/api/item', itemTransactionsRouter);
app.use('/api/inventario', inventarioRouter);
app.get('/', function (req, res) {
  res.send('Hello World!');
});

export default app;
