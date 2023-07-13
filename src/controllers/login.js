const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await UserService.getByEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = {
      expiresIn: '30m',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { email: user.email } }, secret, jwtConfig);

    return res.status(200).json({ token }); 
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};