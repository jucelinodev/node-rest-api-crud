import Sequelize, { Model } from 'sequelize'

class Product extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        category: Sequelize.STRING,
        price: Sequelize.DECIMAL
      },
      {
        sequelize
      }
    )

    return this
  }
}

export default Product
