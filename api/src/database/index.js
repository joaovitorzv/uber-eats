const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Restaurant = require('../app/models/Restaurant');
const Menu = require('../app/models/Menu');

const models = [Restaurant, Menu];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig); 
    
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models)); 
  }
}

module.exports = new Database();