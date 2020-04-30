const Item = require('../../models/Item');
const Menu = require('../../models/Menu');

module.exports = {
  async index(req, res) {
    const { id } = req.params;

    const menu = await Menu.findOne({
      where: { restaurant_id: id }
    });

   const items = await Item.findAll({
      where: { menu_id: menu.id },
    });

    return res.json({ menu, items });
  }
}