require("./database");
// lembrar de conectar o banco de dados!
const express = require('express');
const { routes } = require('./routes');
// 
const server = express();

server.use(express.json())
server.use(routes);

/*
server.get('/:name', (request, response) => {
    return response.send(`<h1>Hello Mundo Jornal ${request.params.name}</h1>`)
});
*/


server.listen(8080, () => {
    console.log('Server started!');
});

/*
require('./database');
require('dotenv').config();

const express = require('express');
const { routes } = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3001, () => {
    console.log('🚀 Server started!');
});

*/