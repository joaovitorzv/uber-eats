const Restaurant = require('../../models/Restaurant');
const Yup = require('yup');

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

    if (!logo || !banner) {
      return res.status(400).json({ error: 'Missing logo or banner' });
    }
    
    const { description, delivery_price } = req.body;

    const update = await Restaurant.update({
      active: true,
      description,
      delivery_price,
      logo_path: logo.filename,
      banner_path: banner.filename
    },{
      where: { id: restaurant_id }
    });

    return res.json(update);
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

    const { description, delivery_price }  = req.body

    let updates = {};

    if (description) {
      updates.description = description;
    }

    if (delivery_price) {
      updates.delivery_price = delivery_price;
    }

    if (req.files['logo']) {
      const logo = req.files['logo'][0];
      updates.logo_path = logo.filename;
    }

    if (req.files['banner']) {
      const banner = req.files['banner'][0];
      updates.banner_path = banner.filename;
    }

    const restaurant = await Restaurant.findOne({
      where: {id: restaurant_id },
    })

    const update = await restaurant.update(updates);

    return res.json(update);
  }
}