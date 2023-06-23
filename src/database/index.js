const { Sequelize, DataTypes } = require('sequelize'); // importacoes
const configDatabase = require('./config/config'); // configurações de banco dados
const database = new Sequelize(configDatabase); // conexão
 
// Chamada de Modelos
// const { Object } = require('../../model/object-model');
const { UserModel } = require('./../model/user-model');
const { TaskModel } = require('./../model/task-model');

// Inicializar Tabelas
// Object.init(database)
UserModel.init(database);
TaskModel.init(database);

// Relacionamento de tabelas
// Objetct.associate(database.models);
// ProdutoModel.associate(database.models);


// utilizado para exporta a conexão criada
module.exports = database;

/*

const { UserModel } = require('../models/user-model');
const { NutritionistModel } = require('../models/nutritionist-model');
const { RecipeModel } = require('../models/recipe-model');


// init models
UserModel.init(database);
NutritionistModel.init(database);
RecipeModel.init(database);

// relationships
UserModel.associate(database.models);
NutritionistModel.associate(database.models);
RecipeModel.associate(database.models);
*/