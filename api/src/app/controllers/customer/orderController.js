const Order = require('../../models/Order');
const Item = require('../../models/Item');
const Menu = require('../../models/Menu');

module.exports = {
  async store(req, res) {
    const customer_id = req.userId;
    const restaurant_id = req.params.id;

    const menu = await Menu.findOne({
      where: { restaurant_id }
    });

    if (!menu) {
      return res.status(400).json({ error: 'This restaurant not exists' });
    }

    const { items } = req.body;

    const items_id = items.map(item => item.item_id);
    const items_quantity = items.map(item => item.quantity)

    let itemsPrice = [];
    for (i in items_id) {
      const item = await Item.findOne({
        where: { id: items_id[i] }
      });
      
      itemsPrice.push(item.price);
    }

    let itemQuantitySum =  [];
    for (i in itemsPrice) {
      itemQuantitySum[i] = itemsPrice[i] * items_quantity[i]
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let subtotal = itemQuantitySum.reduce(reducer);
    subtotal = Math.round((subtotal + Number.EPSILON) * 100) / 100;

    let total = itemQuantitySum.reduce(reducer, menu.delivery_price); 
    total = Math.round((total + Number.EPSILON) * 100) / 100;

    const order = await Order.create({
      customer_id: '1',
      restaurant_id,
      items,
      subtotal,
      delivery_price: menu.delivery_price,
      total
    })

    return res.json(order);
  }
}