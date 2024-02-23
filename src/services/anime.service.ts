import Animes from '../models/anime.model'
import { Anime, AnimeModel } from '../types/anime.type'
import boom from '@hapi/boom'

class AnimeService {
  async create(anime: Anime) {
    const newAnime = await Animes.create(anime).catch((error) => {
      console.log('Could not save anime', error)
    })

    return newAnime
  }

  async findAll() {
    const animes = await Animes.find().catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if(!animes) {
      throw boom.notFound('There are not animes')
    }
    return animes
  }
  async findById(id: string) {
    const anime = await Animes.findById(id).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if(!anime) {
      throw boom.notFound('Anime not found')
    }

    return anime
  }

  async findByName(name: string) {
    const anime = await Animes.findOne({ name }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!anime) {
      throw boom.notFound('Anime not found')
    }
  }
}

export default AnimeService
