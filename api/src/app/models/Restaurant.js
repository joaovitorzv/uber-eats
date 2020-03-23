const { Model, DataTypes } = require('sequelize');

const bcrypt = require("bcryptjs");

class Restaurant extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      restaurant_name: DataTypes.STRING,
      restaurant_address: DataTypes.STRING,
      culinary: DataTypes.STRING,
      delivery_price: DataTypes.INTEGER,
      logo: DataTypes.STRING,
      banner: DataTypes.STRING,
    }, {
      sequelize
    });

    this.addHook('beforeSave', async restaurant => {
      if(restaurant.password) {
        restaurant.password_hash = await bcrypt.hash(restaurant.password, 8); 
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compareSync(password, this.password_hash);
  }
}

module.exports = Restaurant;