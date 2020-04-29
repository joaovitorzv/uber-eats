const { Model, DataTypes } = require('sequelize');

class Menu extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      delivery_price: DataTypes.FLOAT,
      logo_path: DataTypes.STRING,
      banner_path: DataTypes.STRING,
    }, {
      sequelize
    });
    return this;
  };

  static associate(models) {
    this.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant',
    });
  };
};

module.exports = Menu;