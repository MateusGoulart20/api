const { Sequelize, DataTypes } = require('sequelize'); // importacoes
const configDatabase = require('./config/config'); // configurações de banco dados
const database = new Sequelize(configDatabase); // conexão
 
// Chamada de Tabelas
// const { Object } = require('../../model/object-model');
const { FuncionarioModel } = require('../../old/Produto-Venda-Funcionario/model/funcionario-model');
const { ProdutoModel } = require('../model/produto-model');
const { VendaModel } = require('../model/venda-model');
const { VendaProdutoModel } = require('../model/venda_produto-model');

// Inicializar Tabelas
// Object.init(database)
FuncionarioModel.init(database);
ProdutoModel.init(database);
VendaModel.init(database);
VendaProdutoModel.init(database);

// Relacionamento de tabelas
// Objetct.associate(database.models);
ProdutoModel.associate(database.models);
VendaModel.associate(database.models);


// utilizado para exporta a conexão criada
module.exports = database;