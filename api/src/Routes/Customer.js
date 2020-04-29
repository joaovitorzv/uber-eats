const routes = require('express').Router();

routes.get('/test', (req, res) => {
  return res.json({test: 'Working'});
});

module.exports = routes;