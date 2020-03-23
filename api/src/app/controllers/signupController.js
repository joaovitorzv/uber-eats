const Restaurant = require('../models/Restaurant');
const Yup = require('yup');

class signupController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().min(6).required(),
      restaurant_name: Yup.string().required(),
      restaurant_address: Yup.string().required(),
      culinary: Yup.string().required(),
      delivery_price: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Form validation error' });
    }

    const email = req.body.email;

    const { 
      password, 
      restaurant_name, 
      restaurant_address, 
      culinary, 
      delivery_price,
      logo,
      banner, 
    } = req.body;

    const restaurant = await Restaurant.create({
      email,
      password,
      restaurant_name,
      restaurant_address,
      culinary,
      delivery_price,
      logo,
      banner
    });

    return res.json(restaurant);
  }
}

module.exports = new signupController();