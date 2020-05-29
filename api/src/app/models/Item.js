const { Model, DataTypes } = require('sequelize');

class Item extends Model {
  static init(sequelize) {
    super.init({
      restaurant_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      thumbnail_path: DataTypes.STRING,
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
  };
};

module.exports = Item;