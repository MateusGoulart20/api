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