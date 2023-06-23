require("./database");
require('dotenv').config(); // dotenv
// lembrar de conectar o banco de dados!
const express = require('express');
const { routes } = require('./routes');

const server = express();

server.use(express.json())
server.use(routes);

server.listen(8080, () => {
    console.log('🚀  Server started!');
});
/*
15.Criação de uma API
DESAFIO: Desenvolva uma API Restful em Node.js utilizando o framework ‘Express’ para
permitir o cadastro de usuários e o gerenciamento de suas listas de tarefas (todos). A
autenticação na API deve ser realizada através do uso de JWT (JSON Web Token).
16.
Criação de uma API - Continuação
DESAFIO: Desenvolva uma API RESTful em Node.js utilizando o framework Express,
juntamente com o ORM Sequelize, para permitir o cadastro de usuários e o gerenciamento
de suas listas de tarefas (TODOs). A autenticação na API deve ser realizada através do uso
de JWT (JSON Web Token).
*/