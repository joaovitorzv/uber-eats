const routes = require('express').Router();

const signupController = require('../app/controllers/customer/signupController');
const restaurantsController = require('../app/controllers/customer/restaurantsController');
const menuController = require('../app/controllers/customer/menuController');

/*
* Public routes
*/

routes.post('/signup', signupController.store);

routes.get('/restaurants', restaurantsController.index);
routes.get('/restaurants/:id/menu', menuController.index);


module.exports = routes;