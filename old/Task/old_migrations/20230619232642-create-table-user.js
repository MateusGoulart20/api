'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            name: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            password: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            email:{
                type: Sequelize.TEXT,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('user');
    }
};
