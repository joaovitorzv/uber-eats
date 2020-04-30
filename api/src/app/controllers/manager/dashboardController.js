const Dashboard = require('../../models/Dashboard');

module.exports = {
  async index(req, res) {
    const restaurant_id = req.userId;

    const analitycs = await Dashboard.findOne({
      where: { restaurant_id }
    });

    return res.json(analitycs);
  }
}