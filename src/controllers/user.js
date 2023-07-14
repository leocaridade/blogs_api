const jwt = require('jsonwebtoken');
const validateUser = require('../utils/validateUser');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'secretJWT';
const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  try {
    const result = await validateUser(req.body);

    if (result) {
      const { status, message } = result;
    return res.status(status).json({ message });
  }

    const newUser = await UserService.createUser(req.body);

    const { password: _password, ...dataWithoutPassword } = newUser;

    const payload = { data: dataWithoutPassword };

    const token = jwt.sign(payload, secret, jwtConfig);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};