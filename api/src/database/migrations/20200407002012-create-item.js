'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('items', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        menu_id: {
          type: Sequelize.INTEGER,
          references: { model: 'menus', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
        },

        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        description: {
          type: Sequelize.STRING,
          allowNull: false, 
        },

        price: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },

        thumbnail_path: {
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
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items');
  }
};
