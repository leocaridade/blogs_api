const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const newCategory = await CategoryService.createCategory(req.body);

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const categories = await CategoryService.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};