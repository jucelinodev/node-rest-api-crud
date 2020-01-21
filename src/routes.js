import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

import ProductValidator from './app/validator/ProductValidator'

const router = Router()

router.route('/products')
  .get(ProductController.index)
  .post(ProductValidator, ProductController.store)

router.route('/products/:id')
  .get(ProductController.show)
  .put(ProductValidator, ProductController.update)
  .delete(ProductController.destroy)

export default router
