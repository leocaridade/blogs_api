const express = require('express');

const login = require('../controllers/login');
const user = require('../controllers/user');

const routes = express.Router();

routes.post('/login', login);
routes.post('/user', user);

module.exports = routes;