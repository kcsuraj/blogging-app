import { Router, Request, Response } from 'express'
import { createUser } from './controller'
import schema from './schema'
import validator from '../../middlewares/validator'

const router: Router = Router()

/**
 * POST /api/user/signup
 */
router.post('/signup', validator(schema.createUser), createUser)

export default router
