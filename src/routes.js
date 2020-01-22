import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

import ProductValidator from './app/validators/ProductValidator'
import Idvalidator from './app/validators/IdValidator'

const router = Router()

router.route('/products')
  .get(ProductController.index)
  .post(ProductValidator, ProductController.store)

router.route('/products/:id')
  .get(Idvalidator, ProductController.show)
  .put(Idvalidator, ProductValidator, ProductController.update)
  .delete(Idvalidator, ProductController.destroy)

export default router
