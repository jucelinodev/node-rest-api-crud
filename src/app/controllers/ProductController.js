import Product from '../models/Product'

class ProductController {
  async store (req, res) {
    const { name, description, category, price } = req.body

    const product = await Product.create({ name, description, category, price })

    return res.status(201).json(product)
  }
}

export default new ProductController()
