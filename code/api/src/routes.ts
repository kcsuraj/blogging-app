import { Router } from 'express'
import userRoutes from './modules/user/routes'

const router: Router = Router()

router.use('/user', userRoutes)

export default router
