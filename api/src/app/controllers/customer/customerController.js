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
      return res.status(400).json({ error: 'This customer not exists' });
    }

    const pastOrders = await Order.findAll({
      where: { customer_id: customer.id },
      include: [{ 
        model: Restaurant, as: 'restaurant',
        attributes: [
          "id",
          "restaurant_name",
          "banner_path"
        ]
      }]
    });

  
    return res.json({ customer, pastOrders });
  }
}