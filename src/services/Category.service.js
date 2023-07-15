const { Category } = require('../models');

const createCategory = (category) => Category.create(category);

const getAll = () => Category.findAll();

module.exports = {
  createCategory,
  getAll,
};