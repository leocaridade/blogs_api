const express = require('express');

const login = require('../controllers/login');
const { createUser, getAllUsers, getUserById } = require('../controllers/user');
const validateJwt = require('../middleware/validateJwt');
const { createCategory } = require('../controllers/category');

const routes = express.Router();

routes.post('/login', login);
routes.post('/user', createUser);
routes.get('/user', validateJwt, getAllUsers);
routes.get('/user/:id', validateJwt, getUserById);
routes.post('/categories', validateJwt, createCategory);

module.exports = routes;