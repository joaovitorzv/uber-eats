const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

/*
* Manager models
*/

const Restaurant = require('../app/models/Restaurant');
const Menu = require('../app/models/Menu');
const Item = require('../app/models/Item');
const Dashboard = require('../app/models/Dashboard');

/*
* Customer Models
*/

const Customer = require('../app/models/Customer');


const models = [Restaurant, Menu, Item, Dashboard, Customer];

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