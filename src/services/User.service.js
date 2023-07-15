const { User } = require('../models');

const getAll = () => User.findAll({ attributes: { exclude: ['password'] } });

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = (user) => User.create(user);

const getById = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

module.exports = {
  getAll,
  getByEmail,
  createUser,
  getById,
};