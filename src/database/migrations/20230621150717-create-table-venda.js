'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('venda', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "Em espera",
      },
      reponsavel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'funcionario', key: 'id'},
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('venda');
  }
};
