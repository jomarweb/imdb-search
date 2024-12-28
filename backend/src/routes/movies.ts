import { Router } from 'express';
import axios from 'axios';

const router = Router();
const OMDB_API_KEY = process.env.OMDB_API_KEY;

const buildOMDBUrl = (params: string) => `http://www.omdbapi.com/?${params}&apikey=${OMDB_API_KEY}`;

const fetchFromOMDB = async (url: string, res: any) => {
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from OMDB' });
  }
};

router.get('/search', (req, res) => {
  const { title, page = 1 } = req.query;
  const url = buildOMDBUrl(`s=${title}&page=${page}&type=movie`);
  fetchFromOMDB(url, res);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const url = buildOMDBUrl(`i=${id}`);
  fetchFromOMDB(url, res);
});

router.get('/', (req, res) => {
  res.send({ message: 'List of movies' });
});

router.post('/', (req, res) => {
  const newMovie = req.body;
  // Add logic to save the new movie
  res.status(201).send(newMovie);
});

export default router;
