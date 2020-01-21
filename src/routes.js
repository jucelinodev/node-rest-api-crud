import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

import productValidator from './app/validator/productValidator'

const router = Router()

router.route('/products')
  .get(ProductController.index)
  .post(productValidator, ProductController.store)

router.route('/products/:id')
  .get(ProductController.show)
  .put(productValidator, ProductController.update)
  .delete(ProductController.destroy)

export default router
