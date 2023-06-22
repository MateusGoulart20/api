const { Router } = require('express');
const routes = Router();

//const {   } = require('./controller/');
const signupUserController = require('./controller/user/signup');
const siginUserController = require('./controller/user/signin');

// Pegando new () da class
//const taskController = new TaskController();
const { authMiddleware } = require('./middleware/auth-middleware');




// Users
routes.post('/register', signupUserController.signup);
routes.post('/login', siginUserController.sigin);

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