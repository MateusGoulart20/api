## **Configurar Banco na VM:**
<mark>**Se der ruim: siga o passo 1**</mark>

1. Entrar no Postgres via terminal: 
```bash
sudo -u postgres psql
```
```bash
\password postgres
```
insira a nova senha

2. Populando o Banco de Dados:

---
## **Introdução ao Sequelize:**
**Documentação:** *https://sequelize.org/* <br/>
**Explicação:** *https://whimsical.com/6GJm57P4ve9R6tV5fbGsEk*

---
## **Criação e Configuração do projeto:**
```bash
npm init -y
```
instalar dependências
```bash
npm install sequelize pg pg-hstore
```
---

## **Conectando ao Banco via Sequelize:**
```javascript
const { Sequelize } = require('sequelize');

const database = new Sequelize('postgres://postgres:123@localhost:5432/postgres');

// Testar conexão
database.authenticate()
  .then(console.log('Conectou ao banco!'))
  .catch(e => console.error('Erro conexão:', e));
```
---
## **Manipulando o Banco de Dados via Sequelize:**
### **1. Utilizando queries:**
Podemos executar comandos SQL no nosso Banco da seguinte forma:
```javascript
database.query(`CREATE TABLE public.teste (
    cardapio integer NOT NULL,
    receita integer NOT NULL,
    quantidade integer NOT NULL);`)
	.then(console.log('Create table'))
	.catch(console.error);
```
<mark>OBS:</mark> como é uma função Promise, precisa do **then-catch**, ou criar uma função **async-await**
```javascript
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
```
Podemos também criar outro Banco de Dados
```javascript
database.query(`CREATE DATABASE desafio2;`)
	.then(console.log('Create database'))
	.catch(console.error);
```
### **2. Utilizando funcionalidades do ORM Sequelize com Models:**
Os *Models* representam uma tabela no seu banco de dados
```javascript
const { Sequelize, DataTypes } = require('sequelize');

const database = new Sequelize('postgres://postgres:123@localhost:5432/postgres');

// Criar o modelo
const AlimentoModel = database.define('Alimento', {
    idalimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nomealimento: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    unidade_medida: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'alimento',
    timestamps: false,
});

// Manipular

(async () => {
    try {
        // Criar
        await AlimentoModel.create({
            idalimento: 122412313,
            nomealimento: 'Teste 2',
            unidade_medida: 'UN'
        });
        // Consultar
        const alimentos = await AlimentoModel.findAll();
        console.log(alimentos);
        // Consulta com o where
        const alimentosComKG = await AlimentoModel.findAll({
            where: {
                unidade_medida: 'KG'
            }
        });
        console.log(alimentosComKG);
    } catch (error) {
        console.error(error);
    }
})();
```
---