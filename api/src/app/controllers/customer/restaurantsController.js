const Restaurants = require('../../models/Restaurant');

module.exports = {
  async index(req, res) {
    const restaurants = await Restaurants.findAll({
      attributes: [
        'id',
        'restaurant_name',
        'culinary',
        'delivery_price',
        'banner_path',
      ]
    });

    return res.json(restaurants);
  }
}