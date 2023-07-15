const { getPayload } = require('../auth/authfunctions');
const { UserService } = require('../services');

function extractToken(bearerToken) {
  return bearerToken.includes(' ') ? bearerToken.split(' ')[1] : bearerToken;
}

const validateJwt = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) {
  return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);

  try {
    const decoded = getPayload(token);

    const user = await UserService.getByEmail(decoded.data.email);

    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJwt;