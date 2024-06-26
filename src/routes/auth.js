import { Router } from 'express'

import { AuthController } from '../controllers/auth.js'

export const authRouter = Router()

authRouter.post('/signin', AuthController.signin)
authRouter.patch('/:id', AuthController.update)