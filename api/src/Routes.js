const routes = require("express").Router();
const multer = require('multer');

const signupController = require("./app/controllers/signupController"); 
const sessionController = require('./app/controllers/sessionController');
const menuController = require('./app/controllers/menuController');

const authMiddleware = require("./app/middlewares/auth");

const multerConfig = require('./config/multer');
const upload = multer(multerConfig)

routes.get('/', (req, res) => {
  return res.json({ working: true });
})

routes.post('/signup', signupController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddleware);

routes.post('/create-menu', upload.fields([
  { name: 'logo', maxCount: 1 }, 
  { name: 'banner', maxCount: 1 }
  ]), menuController.store);

  
module.exports = routes;