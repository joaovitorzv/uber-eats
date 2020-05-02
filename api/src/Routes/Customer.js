const routes = require('express').Router();

const signupController = require('../app/controllers/customer/signupController');
const sessionController = require('../app/controllers/customer/sessionController');
const restaurantsController = require('../app/controllers/customer/restaurantsController');
const menuController = require('../app/controllers/customer/menuController');
const orderController = require('../app/controllers/customer/orderController');
const customerController = require('../app/controllers/customer/customerController');

const authMiddleware = require('../app/middlewares/auth');

/*
* Public routes
*/

routes.post('/signup', signupController.store);
routes.post('/session', sessionController.store);

routes.use(authMiddleware);

routes.get('/restaurants', restaurantsController.index);
routes.get('/restaurants/:id/menu', menuController.index);
routes.post('/restaurants/:id/order', orderController.store);

routes.get('/informations', customerController.index)

module.exports = routes;