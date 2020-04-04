const express = require("express");
const cors = require("cors");

const { resolve } = require("path")

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
    this.server.use(
      '/files',
      express.static(resolve(__dirname, "..", "tmp", "uploads"))
    );
  }

  routes() {
    this.server.use(Routes);
  }
}

module.exports = new App().server;