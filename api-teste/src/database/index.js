const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { FoodModel } = require('../models/food-model');

const database = new Sequelize(configDatabase);

FoodModel.init(database);

module.exports = database;
