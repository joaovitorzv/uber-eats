const Item = require('../models/Item');
const Menu = require('../models/Menu');

const Yup = require('yup');

module.exports = {
  async store(req, res) {
    const restaurant_id = req.userId;
    const menu_id = 11;

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Form validaiton error'})
    }

    const thumbnail = req.file;
    const {
      title,
      description,
      price
    } = req.body;

    console.log({ title, description, price, thumbnail_path: thumbnail.filename, menu_id });
    const item = await Item.create({
      menu_id,
      title,
      description,
      price,
      thumbnail_path: thumbnail.filename
    });
    
    return res.status(200).json(item);
  }
}