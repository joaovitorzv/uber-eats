const Yup = require('yup');
const Menu = require('../models/Menu');

module.exports = {
  async store(req, res) {
    const restaurant_id = req.userId;

    const schema = Yup.object().shape({
      description: Yup.string().required(),
      delivery_price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Form validation error' });
    }

    const logo = req.files['logo'][0];
    const banner = req.files['banner'][0];

    const { description, delivery_price } = req.body;

    const menu = await Menu.create({
      restaurant_id,
      description,
      delivery_price,
      logo_path: logo.filename,
      banner_path: banner.filename
    });

    return res.json(menu);
  }, 

  async update(req, res) {
    const restaurant_id = req.userId;

    const schema = Yup.object().shape({
      description: Yup.string(),
      delivery_price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Form validation error' });
    }

    const menu = await Menu.findOne({
      where: { restaurant_id }
    });

    const { description, delivery_price } = req.body;

      logo = req.files['logo'][0];
      banner = req.files['banner'][0];
      
    console.log(logo);

    const update = await menu.update({ 
      description,
      delivery_price
    });

    return res.json(update);
  }
}