'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('recipe', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true,
				autoIncrement: true,
				primaryKey: true,
			},
			nameRecipe: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			ingredientsQuantity: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			nutritionistId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'nutritionist', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('recipe');
	}
};
