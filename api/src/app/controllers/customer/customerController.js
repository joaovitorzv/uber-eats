const Customer = require('../../models/Customer');
const Order = require('../../models/Order');
const Restaurant = require('../../models/Restaurant');

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
      include: [
        {
          model: Restaurant, as: 'Restaurant',
          attributes: [
           "id",
           "restaurant_name"
          ],
          required: true,
        }
      ]
    });

    return res.json({ customer, pastOrders });
  }
}