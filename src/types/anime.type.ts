import type { Model } from 'mongoose'

export type Anime = {
  id?: string 
  name: string
  studio: string
  description?: string
}

export type AnimeModel = Model<Anime>
