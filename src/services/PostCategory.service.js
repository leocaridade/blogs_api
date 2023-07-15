const { PostCategory } = require('../models');

const createMultiplePostCategories = (posts) => PostCategory.bulkCreate(posts);

module.exports = {
  createMultiplePostCategories,
};