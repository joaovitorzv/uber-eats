const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init({
      customer_id: DataTypes.INTEGER,
      restaurant_id: DataTypes.INTEGER,
      items: DataTypes.ARRAY(DataTypes.JSONB),
      subtotal: DataTypes.FLOAT,
      delivery_price: DataTypes.FLOAT,
      total: DataTypes.FLOAT,
    },{ 
      sequelize
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Customer, {
      foreignKey: 'customer_id',
      as: 'Customer'
    });
  }

  static associate(models) {
    this.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'Restaurant'
    });
  }

}

module.exports = Order;