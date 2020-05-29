const Item = require('../../models/Item');
const Restaurant = require('../../models/Restaurant');
module.exports = {
  async index(req, res) {
    const restaurant_id = req.params.id;

    const restaurant = await Restaurant.findOne({
      where: { id: restaurant_id },
      attributes: {
        exclude: [
          'password_hash',
          'email',
          'name',
          'active',
          'createdAt',
          'updatedAt'
        ]
      }
    });

    const items = await Item.findAll({
      where: { restaurant_id }
    });

    return res.json({ restaurant, items });
  }
}