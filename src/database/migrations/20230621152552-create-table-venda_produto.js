'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('venda_produto', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      venda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'venda', key: 'id'},
      },
      produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'produto', key: 'id'},
      },
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('venda_produto');
  }
};
