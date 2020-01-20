import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

const router = Router()

router.post('/products', ProductController.store)

export default router
