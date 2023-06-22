## **Continuação com Sequelize:**
- **migrations**
- **relacionamentos**
    - **One-To-One** *(um pra um)*
    - **One-To-Many** *(um pra muitos)*
    - **Many-To-Many** *(muitos pra muitos)*

---

## **Migrations:** 
- Migrations nós dá um versionamento do nosso banco de dados.
- Migrations são arquivos de script que definem a estrutura da tabela do banco de dados e as alterações na estrutura da tabela ao longo do tempo.
- As Migrations podem ser usadas para criar e alterar tabelas, colunas, índices e chaves estrangeiras. Elas garantem que a estrutura do banco de dados corresponda à estrutura definida pelo modelo do aplicativo

**Configurando as migrations:**

instala o sequelize-cli para rodar comandos sequelize dentro do terminal

```bash
npm install sequelize-cli -D
```

Vamos testar 

muda a URL de conexão para criarmos um novo banco de dados
```javascript
const database = new Sequelize('postgres://postgres:123@localhost:5432/nodejs');
```
Agora vamos rodar o comando para criar esse novo banco de dados<br/>
<mark>OBS:</mark> Esse comando vai dar erro porque primeiro temos que configurar o sequelize

```bash
npx sequelize db:create
```

cria um arquivo na raiz de configuração do sequelize *.sequelizerc*

```javascript
//.sequelizerc
const path = require('path')

module.exports = {
    config: path.resolve('src', 'database', 'config', 'config.js'),
}
```
Roda o comando novamente:
```bash
npx sequelize db:create
```

Verifica se o novo banco de dados 'nodejs' foi criado

**Criando suas migrations:**

Com o sequelize-cli configurado vamos criar nossa primeira migration
No arquivo de configuração do sequelize você precisa passar também as
configurações das migrations

```javascript
//.sequelizerc
const path = require('path')

module.exports = {
    config: path.resolve('src', 'database', 'config', 'config.js'),
    'migrations-path': path.resolve('src', 'database', 'migrations'),
}
```

Rode o comando:

```bash
npx sequelize migration:create --name=create-users
```

Após configurar sua migration, rode o comando a seguir para refletir no banco de dados

```bash
npx sequelize db:migrate
```

---
## **Relacionamentos:** 

Existem basicamente 3 tipos de relacionamentos:
- **One-To-One** (um-pra-um):

- **One-To-Many** (um-pra-muitos):

- **Many-To-Many** (muitos-pra-muitos): <mark>OBS:</mark> nesse relacionamento o Sequelize trabalha criando uma nova tabela de junção

**Vamos praticar!**
