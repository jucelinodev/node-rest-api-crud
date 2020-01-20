import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

const router = Router()

router.route('/products')
  .get(ProductController.index)
  .post(ProductController.store)

export default router
