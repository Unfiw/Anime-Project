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

router.get('/:id', async (req, res, next) => {
  try {
    const anime = await service.findById(req.params.id)
    res.status(200).json(anime)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const anime = await service.findAll()
    res.status(200).json(anime)
  } catch (error) {
    next(error)
  }
})



export default router
