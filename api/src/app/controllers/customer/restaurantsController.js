const Restaurants = require('../../models/Restaurant');

module.exports = {
  async index(req, res) {
    const restaurants = await Restaurants.findAll({
      attributes: {
        exclude: [
          'name',
          'email',
          'active',
          'password_hash',
          'createdAt', 
          'updatedAt'
        ]
      }
    });

    return res.json(restaurants);
  }
}