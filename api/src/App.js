const express = require("express");
const cors = require("cors");

const Routes =  require('./Routes');
require("./database");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(Routes);
  }
}

module.exports = new App().server;