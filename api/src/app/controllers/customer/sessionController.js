const Yup = require('yup');
const jwt = require('jsonwebtoken');

const Customer = require('../../models/Customer');
const authConfig = require('../../../config/auth');

module.exports = {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Form validation failed'});
    }

    const {
      email,
      password
    } = req.body;

    const customer = await Customer.findOne({
       where: { email }
    })

    if (!customer) {
      return res.status(401).json({ error: 'This email not registered' });
    }

    if (!(await customer.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match'});
    }

    const { id, name } = customer;

    return res.json({
      customer: {
        id,
        name, 
        email
      },
      token: jwt.sign({ id }, authConfig.secret)
    });

  }
}