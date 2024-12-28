import { Router } from 'express';
import axios from 'axios';

const router = Router();
const OMDB_API_KEY = process.env.OMDB_API_KEY;

router.get('/search', async (req, res) => {
  const { title, page = 1 } = req.query;
  try {
    console.log('OMDB_API_KEY', OMDB_API_KEY);
    const response = await axios.get(`http://www.omdbapi.com/?s=${title}&page=${page}&apikey=${OMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
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
