const Restaurant = require('../models/Restaurant');

module.exports = {
  async index(req, res) {
    const restaurant_id = req.userId;

    const restaurant = await Restaurant.findOne({
      where: { id: restaurant_id },
      attributes: { exclude: ["password_hash"] }
    });

    return res.json(restaurant);
  }
}