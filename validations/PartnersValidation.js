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
        .required(),
      business: Joi.string().required(),
      partners: Joi.array().required(),
      boardmembers: Joi.array().required(),
      events: Joi.array().required(),
      field: Joi.string().required(),
      projects: Joi.array().required(),
      feedback: Joi.string().required(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.array(),
      Notifications: Joi.array(),
      reviews: Joi.array(),
      ReviewOwner: Joi.string()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      Email: Joi.string().email(),
      Password: Joi.string().min(3).max(15),
      business: Joi.string(),
      partners: Joi.array(),
      boardmembers: Joi.array(),
      events: Joi.array(),
      field: Joi.string(),
      projects: Joi.array(),
      feedback: Joi.string(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.array(),
      Notifications: Joi.array(),
      reviews: Joi.array(),
      ReviewOwner: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  }
};
