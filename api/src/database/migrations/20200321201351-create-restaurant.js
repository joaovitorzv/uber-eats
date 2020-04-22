'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restaurants', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      restaurant_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      restaurant_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      restaurant_city: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      culinary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('restaurants');
  }
};

