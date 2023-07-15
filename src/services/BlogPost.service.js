const { BlogPost, User, Category } = require('../models');

const createBlogPost = (post) => BlogPost.create(post);

const getAllBlogPosts = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

  const getBlogPostById = (id) => BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};