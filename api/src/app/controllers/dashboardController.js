const Dashboard = require('../../app/models/Dashboard');

module.exports = {
  async index(req, res) {
    const restaurant_id = req.userId;

    const balance = 0.00;
    const total_orders = 0;
    const top_items = ['fodase', 'pinto']
    console.log(top_items)

    const analitycs = await Dashboard.findOrCreate({
      where: { restaurant_id },
      balance,
      total_orders,
      top_items
    });

    return res.json(analitycs);
  }
}