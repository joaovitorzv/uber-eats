const { Model, DataType } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init({

    },{ 
      sequelize
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'customer'
    });
  }

  static associate(models) {
    this.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant'
    });
  }

}

module.exports = Order;