const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      Email: Joi.string()
        .email()
        .required(),
      Password: Joi.string()
        .min(3)
        .max(15)
        .required()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      Email: Joi.string().email(),
      Password: Joi.string()
        .min(3)
        .max(15)
    };
    return Joi.validate(request, updateSchema);
  }
};
