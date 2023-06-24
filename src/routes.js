const { Router } = require('express');
const routes = Router();

//const {   } = require('./controller/');
const signupUser = require('./controller/user/signup');
const siginUser = require('./controller/user/signin');

const estoqueCreate = require('./controller/estoque-diario/create');
const estoqueRead = require('./controller/estoque-diario/read');
const estoqueUpdate = require('./controller/estoque-diario/update');
const estoqueDelete = require('./controller/estoque-diario/delete');

const merendeiraCreate = require('./controller/merendeira/create');
const merendeiraRead = require('./controller/merendeira/read');
const merendeiraUpdate = require('./controller/merendeira/update');
const merendeiraDelete = require('./controller/merendeira/delete');


// Pegando new () da class
//const taskController = new TaskController();
const { authMiddleware } = require('./middleware/auth-middleware');

// Users
routes.post('/api/users', signupUser.signup);
routes.post('/api/authenticate', siginUser.sigin);

routes.post('/api/estoque', /*authMiddleware,*/ estoqueCreate.create);
routes.get('/api/estoque', /*authMiddleware,*/ estoqueRead.read);
routes.put('/api/estoque/:id', /*authMiddleware,*/ estoqueUpdate.update);
routes.delete('/api/estoque/:id',  /*authMiddleware,*/ estoqueDelete.delete);

routes.post('/api/merendeira', /*authMiddleware,*/ merendeiraCreate.create);
routes.get('/api/merendeira', /*authMiddleware,*/ merendeiraRead.read);
routes.put('/api/merendeira/', /*authMiddleware,*/ merendeiraUpdate.update);
routes.delete('/api/merendeira/',  /*authMiddleware,*/ merendeiraDelete.delete);

module.exports = { routes };