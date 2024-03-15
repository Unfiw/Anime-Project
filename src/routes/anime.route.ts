import express from 'express'
import { Anime } from '../types/anime.type'
import AnimeService from '../services/anime.service'

const router = express.Router()
const service = new AnimeService()

router.post('/', async (req, res) => {
  const anime: Anime = req.body
  const newAnime = await service.create(anime)

  res.status(201).json(newAnime)
})

router.get('/', async (req, res, next) => {
  try {
    const anime = await service.findAll()
    res.status(200).json(anime)
  } catch (error) {
    next(error)
  }
})

router.get('/findAnimeId/:id', async (req, res, next) => {
  try {
    const anime = await service.findById(req.params.id)
    res.status(200).json(anime)
  } catch (error) {
    next(error)
  }
})

router.get('/filter', async (req, res, next) => {
    try {
      const { name, studio, description } = req.query;

      const filter: Partial<Anime> = {};
      if (name) filter.name = name.toString();
      if (studio) filter.studio = studio.toString();
      if (description) filter.description = description.toString();

      const animes = await service.findByFilter(filter);

      res.json(animes);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

export default router
