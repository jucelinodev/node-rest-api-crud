import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

import ProductValidator from './app/validators/ProductValidator'
import IdValidator from './app/validators/IdValidator'

const router = Router()

router.route('/products')
  .get(ProductController.index)
  .post(ProductValidator, ProductController.store)

router.route('/products/:id')
  .get(IdValidator, ProductController.show)
  .put(IdValidator, ProductValidator, ProductController.update)
  .delete(IdValidator, ProductController.destroy)

export default router
