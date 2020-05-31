const Order = require('../../models/Order');
const Item = require('../../models/Item');
const Restaurant = require('../../models/Restaurant');

module.exports = {
  async store(req, res) {
    const customer_id = req.userId;
    const restaurant_id = req.params.id;

    const restaurant = await Restaurant.findOne({
      where: { id: restaurant_id }
    });

    let { items } = req.body;

    const items_id = items.map(item => item.item_id);
    const items_quantity = items.map(item => item.quantity)
    
    const itemTitle = [];
    const itemDescription = [];

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
      itemDescription.push(item.description);
    }

    for (i in itemTitle) {
      items[i].item_name = itemTitle[i]
    }

    for (i in itemDescription) {
      items[i].item_description = itemDescription[i]
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

    let total = itemQuantitySum.reduce(reducer, restaurant.delivery_price); 
    total = Math.round((total + Number.EPSILON) * 100) / 100;

    // For orders under R$15 add a R$ 1.50 fee to order
    let smallOrder;
    subtotal < 15 ? smallOrder = 1.50 : smallOrder = 0;

    // Service fee (5% of subtotal) 
    const serviceFee = ((subtotal * 5) / 100).toFixed(2);

    const totalFees = parseFloat(smallOrder) + parseFloat(serviceFee);
    total += totalFees;

    const order = await Order.create({
      customer_id: customer_id,
      restaurant_id,
      items,
      subtotal,
      fees: totalFees,
      delivery_price: restaurant.delivery_price,
      total
    })

    return res.json(order);
  }
}