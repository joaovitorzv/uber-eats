const Customer = require('../../models/Customer');
const Order = require('../../models/Order');
const Restaurant = require('../../models/Restaurant');

module.exports = {
  async index(req, res) {
   /* const customer = await Customer.findOne({
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
            'id',
            'restaurant_name',
          ]
        }, 
        { 
          model: Menu, as: 'Menus',
          attributes: [
            'banner_path'
          ]
        }
      ]
    });*/

    const orders = await Order.findAll({
      include: [
        {
          model: Menu, as: 'Menu',
          attributes: [
            "banner_path"
          ]
        },
        {
          model: Restaurant, as: 'Restaurant'
        }
      ]
    });
  
    return res.json({ orders });
  }
}