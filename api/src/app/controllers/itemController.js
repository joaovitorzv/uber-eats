const Item = require('../models/Item');
const Menu = require('../models/Menu');

const Yup = require('yup');

module.exports = {
  async index(req, res) {
    const restaurant_id = req.userId;
    const menu = await Menu.findOne({
      where: { restaurant_id }
    });

    if (menu) { 
      const items = await Item.findAll({
        where: { menu_id: menu.id }
      });

      return res.json(items);
    }
    
    return res.json("To see your items fill out all the forms below");
  },

  async store(req, res) {
    const restaurant_id = req.userId;
    const menu = await Menu.findOne({
      where: { restaurant_id }
    });

    if (!menu) {
      return res.status(401).json({ error: 'You need to configure your address settings to create items' });
    }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Form validation error'})
    }

    const thumbnail = req.file;
    const {
      title,
      description,
      price
    } = req.body;

    const item = await Item.create({
      menu_id: menu.id,
      title,
      description,
      price,
      thumbnail_path: thumbnail.filename
    });
    
    return res.json(item);
  },

  async update(req, res) {
    const { id } = req.params;

    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Form validation error' });
    };

    const thumbnail = req.file;
    const {
      title,
      description,
      price
    } = req.body;

    await Item.update(
      {title, description, price, thumbnail_path: thumbnail.filename},
      {where: { id } },
    );

    return res.status(204).json();
  },

  async delete(req, res) {
    const { id } = req.params;

    await Item.destroy({
      where: { id },
    });
    
    return res.status(204).json();
  }
}