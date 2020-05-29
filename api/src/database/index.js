const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

// Manager models
const Restaurant = require('../app/models/Restaurant');
const Item = require('../app/models/Item');
const Dashboard = require('../app/models/Dashboard');

// Customer Models
const Customer = require('../app/models/Customer');


// Core models
const Order = require('../app/models/Order');

const models = [Restaurant, Item, Dashboard, Customer, Order];

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