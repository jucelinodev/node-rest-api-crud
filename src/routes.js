import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

import productValidator from './app/validators/productValidator'
import idValidator from './app/validators/idValidator'

const router = Router()

router.route('/products')
  .get(ProductController.index)
  .post(productValidator, ProductController.store)

router.route('/products/:id')
  .get(idValidator, ProductController.show)
  .put(idValidator, productValidator, ProductController.update)
  .delete(idValidator, ProductController.destroy)

export default router
