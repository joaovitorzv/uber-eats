const { Model, DataTypes } = require('sequelize');

class Dashboard extends Model {
  static init(sequelize) {
    super.init({
      balance: DataTypes.FLOAT,
      total_orders: DataTypes.INTEGER,
      top_items: DataTypes.ARRAY(DataTypes.STRING),
    }, {
      sequelize
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant'
    });
  }
}

module.exports = Dashboard;