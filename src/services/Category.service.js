const { Category } = require('../models');

const createCategory = (category) => Category.create(category);

module.exports = {
  createCategory,
};