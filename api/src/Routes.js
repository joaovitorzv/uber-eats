const routes = require("express").Router();

const signupController = require("./app/controllers/signupController"); 
const sessionController = require('./app/controllers/sessionController');

const authMiddleware = require("./app/middlewares/auth");

routes.post('/signup', signupController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddleware);

module.exports = routes;