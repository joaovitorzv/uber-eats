const { Model, DataTypes } = require('sequelize');

class Item extends Model {
  static init(sequelize) {
    super.init({
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
    this.belongsTo(models.Menu, {
      foreignKey: 'menu_id',
      as: 'menu'
    });
  };
};

module.exports = Item;