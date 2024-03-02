import express from 'express'
import CategoryRouter from './category.route'
import UserRouter from './user.route'
import AnimeRouter from './anime.route'
import AuthRouter from './auth.route'

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/categories', CategoryRouter)
  router.use('/users', UserRouter)
  router.use('/animes', AnimeRouter)
  router.use('/auth', AuthRouter)
}

export default routerApi
