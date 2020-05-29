const Item = require('../../models/Item');
const Restaurant = require('../../models/Restaurant');

const Yup = require('yup');

module.exports = {
  async index(req, res) {
    const restaurant_id = req.userId;
    
    const items = await Item.findAll({
      where: { restaurant_id: restaurant_id }
    })
    
    return res.json(items);
  },

  async store(req, res) {
    const restaurant_id = req.userId;
    const restaurant = await Restaurant.findOne({
      where: { id: restaurant_id }
    });

    if (!restaurant.active) {
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

    if (!thumbnail) {
      return res.status(400).json({ error: 'Missing thumbnail image'});
    }

    const {
      title,
      description,
      price
    } = req.body;

    const item = await Item.create({
      restaurant_id: restaurant_id,
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