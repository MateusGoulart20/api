'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('funcionario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      nome: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      sexo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      escolariedade: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('funcionario');
  }
};
