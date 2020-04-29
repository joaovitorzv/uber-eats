const Restaurant = require('../models/Restaurant');
const Menu = require('../models/Menu');
const Yup = require('yup');

module.exports = {
  async index(req, res) {
    const restaurant_id = req.userId;

    const restaurant = await Restaurant.findOne({
      where: { id: restaurant_id }
    });

    if (restaurant.active) {
      restaurantInfo = await Menu.findOne({
        where: { restaurant_id },
        include: [
          { 
            model: Restaurant, as: 'restaurant',
            attributes: { exclude: ['password_hash']},
            required: true, 
          },
        ],
      });

    } else {
      restaurantInfo = restaurant;
    }

    return res.json(restaurantInfo);
  },

  async store(req, res) {
    const restaurant_id = req.userId;
    
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
      restaurant_name: Yup.string(),
      restaurant_address: Yup.string(),
      restaurant_city: Yup.string(),
      culinary: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Form validation failed'});
    }

    const { 
      name,
      email,
      password, 
      restaurant_name, 
      restaurant_address, 
      restaurant_city,
      culinary
    } = req.body;


    const restaurant = await Restaurant.findOne({
      where: { id: restaurant_id }
    });

    const updateRestaurant = await restaurant.update({
      name,
      email,
      password,
      restaurant_name,
      restaurant_address,
      restaurant_city,
      culinary,
    });
    
    return res.json(updateRestaurant);
  }
}