import express from 'express';
import moviesRouter from './routes/movies';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/movies', moviesRouter);

app.get('/api/status', (req, res) => {
  res.send({ status: 'Server is running' });
});

export default app;
