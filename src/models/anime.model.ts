import { Schema, model } from 'mongoose'

import { Anime, AnimeModel } from '../types/anime.type'

const Animes = new Schema<Anime, AnimeModel>({    
  name: {
    type: String, 
    required: true, 
    unique: false, 
    index: true, 
    trim: true
  },
  description: {
    type: String, 
    required: false, 
    trim: true
  }
})
  
export default model('Anime', Animes)
