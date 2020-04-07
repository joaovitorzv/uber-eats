const routes = require("express").Router();
const multer = require('multer');

const signupController = require("./app/controllers/signupController"); 
const sessionController = require('./app/controllers/sessionController');
const menuController = require('./app/controllers/menuController');
const itemController = require('./app/controllers/itemController');

const authMiddleware = require("./app/middlewares/auth");

const multerConfig = require('./config/multer');
const upload = multer(multerConfig)

/*
* Public session routes
*/

// Manager
routes.post('/signup', signupController.store);
routes.post('/sessions', sessionController.store);

/*
* Public Routes
*/


/*
* Below this auth middleware 
* all routes are private  and requires jwt token  
*/

routes.use(authMiddleware);

// Manager routes

routes.post('/create-menu', upload.fields([
  { name: 'logo', maxCount: 1 }, 
  { name: 'banner', maxCount: 1 }
]), menuController.store);

routes.put('/update-menu', upload.fields([
  { name: 'logo', maxCount: 1 }, 
  { name: 'banner', maxCount: 1 }
]), menuController.update);

routes.post('/create-item', upload.single('thumbnail'), itemController.store);
routes.put('/update-item/:id', upload.single('thumbnail'), itemController.update);
routes.delete('/delete-item/:id', itemController.delete);
routes.get('/items', itemController.index);

module.exports = routes;