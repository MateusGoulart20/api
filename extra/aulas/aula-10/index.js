const { Sequelize } = require('sequelize');

const database = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');

// Testar conexão
database.authenticate()
  .then(console.log('Conectou ao banco!'))
  .catch(e => console.error('Erro conexão:', e));
/*
database.query(`CREATE TABLE public.alimento (
    idalimento integer NOT NULL,
    nomealimento text NOT NULL,
    unidade_medida text NOT NULL);`)
	.then(console.log('Tabela Criada'))
	.catch(console.error);
*/
/*
(async () => {
        try {
            const result = await database.query(`CREATE TABLE public.teste (
                cardapio integer NOT NULL,
                receita integer NOT NULL,
                quantidade integer NOT NULL);`);
            console.log(result);
        } catch (error) {
            console.error('Error create database:', error);
        }
    })();

    database.query(`CREATE DATABASE desafio2;`)
	.then(console.log('Create database'))
	.catch(console.error);*/

//tarefaController.menu();