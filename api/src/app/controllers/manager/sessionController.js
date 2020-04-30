const jwt = require("jsonwebtoken");

const authConfig = require('../../../config/auth');
const Restaurant = require("../../models/Restaurant");
const Yup = require("yup");


class sessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Form validation error' });
    }

    const { email, password } = req.body;

    const restaurant = await Restaurant.findOne({ where: { email } });
    if (!restaurant) {
      return res.status(400).json({ error: 'Email not found' });
    }

    if (!(await restaurant.checkPassword(password))) {
      return res.status(401).json({ error: 'Invalid password '});
    }

    const { id, restaurant_name } = restaurant;

    return res.json({
      user: {
        id,
        restaurant_name,
      },
      token: jwt.sign({ id }, authConfig.secret)
    })
  }
}

module.exports = new sessionController();