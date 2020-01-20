import Product from '../models/Product'

class ProductController {
  async index (req, res) {
    const products = await Product.findAll()

    return res.json(products)
  }

  async store (req, res) {
    const { name, description, category, price } = req.body

    const productExist = await Product.findOne({ where: { name } })

    if (productExist) {
      return res.status(404).json({ error: 'Product already registered' })
    }

    const product = await Product.create({ name, description, category, price })

    return res.status(201).json(product)
  }
}

export default new ProductController()
