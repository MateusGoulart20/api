const { Router } = require('express');
const routes = Router();

//const {   } = require('./controller/');
const signupUser = require('./controller/user/signup');
const siginUser = require('./controller/user/signin');
const createTask = require('./controller/task/create-task');
const readTask = require('./controller/task/read-task');
const updateTask = require('./controller/task/update-task');
const deleteTask = require('./controller/task/delete-task');

// Pegando new () da class
//const taskController = new TaskController();
const { authMiddleware } = require('./middleware/auth-middleware');




// Users
routes.post('/api/users', signupUser.signup);
routes.post('/api/authenticate', siginUser.sigin);
routes.post('/api/todos', authMiddleware, createTask.create);
routes.get('/api/todos', authMiddleware, readTask.read);
routes.put('/api/todos/:id', authMiddleware, updateTask.update);
routes.delete('/api/todos/:id',  authMiddleware, deleteTask.delete);

module.exports = { routes };


/*
const createNutritionistController = require('./controllers/create-nutritionist-controller');
const deleteNutritionistController = require('./controllers/delete-nutritionist-controller');
const createRecipeController = require('./controllers/create-recipe-controller');

// Nutritionist
routes.post('/nutritionist', authMiddleware, createNutritionistController.create);
routes.delete('/nutritionist', authMiddleware, deleteNutritionistController.delete);

// Recipe
routes.post('/recipe', authMiddleware, createRecipeController.create);
*/