const routes = require("express").Router();
const multer = require('multer');

const signupController = require("./app/controllers/signupController"); 
const sessionController = require('./app/controllers/sessionController');
const menuController = require('./app/controllers/menuController');
const itemController = require('./app/controllers/itemController');

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

routes.put('/update-menu', upload.fields([
  { name: 'logo', maxCount: 1 }, 
  { name: 'banner', maxCount: 1 }
]), menuController.update);

routes.post('/create-item', upload.single('thumbnail'), itemController.store);

module.exports = routes;