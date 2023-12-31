'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estoque_diario', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      merendeira:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'merendeira', key: 'id'},
      },
      qtddeitens: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estoque_diario');
  }
};
