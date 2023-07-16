const { Op } = require('sequelize');
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

const updateBlogPost = async (id, title, content) => {
  const [updatedBlogPost] = await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  return updatedBlogPost;
};

const deleteBlogPostById = (id) => BlogPost.destroy({ where: { id } });

const deleteBlogPostsByUserId = (userId) => BlogPost.destroy({ where: { userId } });

const getAllBlogPostsByQuery = (searchTerm) => BlogPost.findAll({
  where: {
    [Op.or]: [
      { title: { [Op.like]: `%${searchTerm}%` } },
      { content: { [Op.like]: `%${searchTerm}%` } },
    ],
  },
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPostById,
  deleteBlogPostsByUserId,
  getAllBlogPostsByQuery,
};