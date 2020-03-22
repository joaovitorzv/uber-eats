const routes = require("express").Router();

routes.get('/', (req, res) => {
  res.json({ working: true });
})

module.exports = routes;