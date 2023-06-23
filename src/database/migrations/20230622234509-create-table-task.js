'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('task', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      responsavel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'user', key: 'id' },
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('task');
  }
};
