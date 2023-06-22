const { Router } = require('express');
const routes = Router();


const funcionarioController = require('./controller/funcionario-controller');
const produtoController = require('./controller/produto-controller');
const venda = require('./controller/venda-controller');
//const {   } = require('./controller/');


routes.post('/funcionario',funcionarioController.create);
routes.get('/funcionario',funcionarioController.read);
routes.put('/funcionario',funcionarioController.update);
routes.delete('/funcionario',funcionarioController.delete);

routes.post('/produto',produtoController.create);
routes.get('/produto',produtoController.read);
routes.put('/produto',produtoController.update);
routes.delete('/produto',produtoController.delete);

routes.post('/venda',venda.create);
routes.get('/venda',venda.read);
routes.put('/venda',venda.update);
routes.delete('/venda',venda.delete);

//const taskController = new TaskController();

module.exports = { routes };

/*
routes.post('/user', userController.create);
routes.get('/user', userController.find);
routes.put('/user', userController.update);
routes.delete('/user', userController.delete);

routes.post('/task', taskController.create);
routes.get('/task', taskController.find);
routes.put('/task', taskController.update);
routes.delete('/task', taskController.delete);
*/
/*
const { Router } = require('express');

const signupUserController = require('./controllers/signup-user-controller');
const siginUserController = require('./controllers/sigin-user-controller');
const createNutritionistController = require('./controllers/create-nutritionist-controller');
const deleteNutritionistController = require('./controllers/delete-nutritionist-controller');
const createRecipeController = require('./controllers/create-recipe-controller');

const { authMiddleware } = require('./middleware/auth-middleware');

const routes = Router();

// Users
routes.post('/register', signupUserController.signup);
routes.post('/login', siginUserController.sigin);

// Nutritionist
routes.post('/nutritionist', authMiddleware, createNutritionistController.create);
routes.delete('/nutritionist', authMiddleware, deleteNutritionistController.delete);

// Recipe
routes.post('/recipe', authMiddleware, createRecipeController.create);

module.exports = { routes };

*/