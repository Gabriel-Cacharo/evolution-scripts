const express = require('express');
const { checkToken } = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const TokenController = require('./controllers/TokenController');

const routes = express.Router();

routes.post('/auth/register', UserController.register);
routes.post('/auth/login', UserController.login);

routes.post('/verifyToken', TokenController.verifyToken);

module.exports = routes;
