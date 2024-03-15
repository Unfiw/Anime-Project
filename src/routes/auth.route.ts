import express from 'express'
import passport from 'passport'
import UserService from '../services/user.service'
import { UserRequestType as RequestType} from '../types/user.type'
import jwt from 'jsonwebtoken'
import { config } from '../config/config'

const router = express.Router()
const service = new UserService()

router.post(
  '/login', 
  passport.authenticate('local', {session: false}), 
  async (req: RequestType, res, next) => {
    try {
      const {user} = req
      //sub es el id 
      const payload = { sub: user.id }
      const dbUser = await service.findByEmail(user.email)
      console.log(dbUser)
      const token = jwt.sign(payload, config.jwtSecret)
      console.log(token)
      res.status(200).json({ user: dbUser.toClient(), token })
    } catch (error) {
     next(error)
    }
})

export default router
