const Customer = require('../../models/Customer');
const Order = require('../../models/Order');
const Restaurant = require('../../models/Restaurant');
const Menu = require('../../models/Menu');

module.exports = {
  async index(req, res) {
    const customer = await Customer.findOne({
      where: { id: req.userId },
      attributes: {
        exclude: ['password_hash']
      }
    });

    if (!customer) {
      return res.status(400).json({ errror: 'This customer not exists' });
    }

    const pastOrders = await Order.findAll({
      where: { customer_id: customer.id },
      /*include: [
        {
          model: Restaurant, as: 'Restaurant',
          attributes: [
           "id",
           "restaurant_name",
          ],
          required: true,
        }
      ]*/
    });
    const restaurant = [];

    for (i in pastOrders) {
      const restaurantOrder = await Restaurant.findOne({
        where: { id: pastOrders[i].restaurant_id }
      });

      restaurant.name = restaurantOrder.restaurant_name
      restaurant.restaurant_id = restaurantOrder.id
    }

    for (i in pastOrders) {
      const menuOrder = await Menu.findOne({
        where: { restaurant_id: pastOrders[i].restaurant_id }
      });

      restaurant.banner_path = menuOrder.banner_path;
      restaurant.delivery_price = menuOrder.delivery_price;
    }

    console.log({restaurant});

    return res.json({ customer, pastOrders });
  }
}