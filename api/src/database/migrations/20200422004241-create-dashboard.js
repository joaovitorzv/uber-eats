'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dashboards', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'restaurants', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      
      balance: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.00
      },

      total_orders: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        defaultValue: 0
      },

      top_items: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dashboards');
  }
};
