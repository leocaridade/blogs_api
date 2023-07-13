const express = require('express');

const login = require('../controllers/login');

const routes = express.Router();

routes.post('/login', login);

module.exports = routes;