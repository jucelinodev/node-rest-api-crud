import Product from '../models/Product'

class ProductController {
  async index (req, res) {
    const products = await Product.findAll()
    return res.json(products)
  }

  async show (req, res) {
    const { id } = req.params
    const product = await Product.findOne({ where: { id } })

    if (!product) {
      return res.status(400).json({ message: 'Product does not exist!' })
    }

    return res.json(product)
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

  async destroy (req, res) {
    const { id } = req.params
    const product = await Product.destroy({ where: { id } })

    if (!product) {
      return res.status(400).json({ message: 'Product does not exist!' })
    }

    return res.status(204).json()
  }
}

export default new ProductController()
