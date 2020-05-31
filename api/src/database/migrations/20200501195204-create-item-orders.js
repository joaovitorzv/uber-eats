'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('orders', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
  
        customer_id: {
          type: Sequelize.INTEGER,
          references: { model: 'customers', key: 'id' },
          allowNull: false,
        },
  
        restaurant_id: {
          type: Sequelize.INTEGER,
          references: { model: 'restaurants', key: 'id' },
          allowNull: false,
        },
  
        items: {
          type: Sequelize.ARRAY(Sequelize.JSONB),
          allowNull: false,
        },
  
        subtotal: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },

        fees: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
  
        delivery_price: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
  
        total: {
          type: Sequelize.FLOAT,
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
      return queryInterface.dropTable('orders');
  }
};
