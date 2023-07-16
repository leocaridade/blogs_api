const express = require('express');

const login = require('../controllers/login');
const { createUser, getAllUsers, getUserById, deleteMe } = require('../controllers/user');
const validateJwt = require('../middleware/validateJwt');
const { createCategory, getAllCategories } = require('../controllers/category');
const {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPostById,
  getAllBlogPostsByQuery,
} = require('../controllers/blogPost');

const routes = express.Router();

routes.post('/login', login);
routes.post('/user', createUser);
routes.get('/user', validateJwt, getAllUsers);
routes.get('/user/:id', validateJwt, getUserById);
routes.delete('/user/me', validateJwt, deleteMe);
routes.post('/categories', validateJwt, createCategory);
routes.get('/categories', validateJwt, getAllCategories);
routes.get('/post/search', validateJwt, getAllBlogPostsByQuery);
routes.put('/post/:id', validateJwt, updateBlogPost);
routes.post('/post', validateJwt, createBlogPost);
routes.get('/post', validateJwt, getAllBlogPosts);
routes.get('/post/:id', validateJwt, getBlogPostById);
routes.delete('/post/:id', validateJwt, deleteBlogPostById);

module.exports = routes;