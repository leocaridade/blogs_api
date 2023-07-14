const Joi = require('joi');
const { UserService } = require('../services');

module.exports = async (user) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });

  const { error } = schema.validate(user);
  if (error) {
    return {
      status: 400,
      message: error.details[0].message,
    };
  }

  const userExist = await UserService.getByEmail(user.email);
  
  if (userExist) return { status: 409, message: 'User already registered' };

  return null;
};