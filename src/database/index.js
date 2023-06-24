const { Sequelize, DataTypes } = require('sequelize'); // importacoes
const configDatabase = require('./config/config'); // configurações de banco dados
const database = new Sequelize(configDatabase); // conexão
 
// Chamada de Modelos
// const { Object } = require('../../model/object-model');
const { UserModel } = require('./../model/user-model');
const { MerendeiraModel } = require('./../model/merendeira-model');
const { EstoqueDiarioModel } = require('./../model/estoque_diario');


// Inicializar Tabelas
// Object.init(database)
UserModel.init(database);
MerendeiraModel.init(database);
EstoqueDiarioModel.init(database);

// Relacionamento de tabelas
// Objetct.associate(database.models);

EstoqueDiarioModel.associate(database.models);


// utilizado para exporta a conexão criada
module.exports = database;