const Order = require('../../models/Order');
const Item = require('../../models/Item');

module.exports = {
  async store(req, res) {
    const customer_id = req.userId;
    const restaurant_id = req.params.id;

    let { items } = req.body;

    const items_id = items.map(item => item.item_id);
    const items_quantity = items.map(item => item.quantity)

    const itemTitle = [];
    for (i in items_id) {
      const item = await Item.findOne({
        where: { 
          id: items_id[i],
          restaurant_id  
        }
      });

      if (!item) {
        return res.json({ error: `Item ${items_id[i]} not exits`});
      }
      itemTitle.push(item.title)
    }

    for (i in itemTitle) {
      items[i].item_name = itemTitle[i]
    }

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
      customer_id: customer_id,
      restaurant_id,
      items,
      subtotal,
      delivery_price: menu.delivery_price,
      total
    })

    return res.json(order);
  }
}