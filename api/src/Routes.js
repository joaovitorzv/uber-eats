const routes = require("express").Router();

const signupController = require("./app/controllers/signupController"); 
const sessionController = require('./app/controllers/sessionController');
const menuController = require('./app/controllers/menuController');

const authMiddleware = require("./app/middlewares/auth");

routes.get('/', (req, res) => {
  return res.json({ working: true });
})

routes.post('/signup', signupController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddleware);

routes.post('/create-menu', menuController.store);

module.exports = routes;