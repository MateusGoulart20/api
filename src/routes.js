const { Router } = require('express');
const { UserController } = require('./controller/user-controller');

const routes = Router();
const userController = new UserController();

routes.post('/user', userController.create);

module.exports = { routes };