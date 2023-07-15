const validateUser = require('../utils/validateUser');
const { UserService } = require('../services');
const { createToken } = require('../auth/authfunctions');

const createUser = async (req, res) => {
  try {
    const result = await validateUser(req.body);

    if (result) {
      const { status, message } = result;
    return res.status(status).json({ message });
  }

    const newUser = await UserService.createUser(req.body);

    const { password: _password, ...dataWithoutPassword } = newUser;

    const payload = { data: dataWithoutPassword };

    const token = createToken(payload);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await UserService.getAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserService.getById(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};