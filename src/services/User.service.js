const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = (data) => User.create(data);

module.exports = {
  getByEmail,
  createUser,
};