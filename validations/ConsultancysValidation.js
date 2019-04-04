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
      business: Joi.array().required(),
      partners: Joi.array().required(),
      boardmembers: Joi.array().required(),
      events: Joi.array().required(),
      reports: Joi.array().required(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.array(),
      Notifications: Joi.array(),
      projects: Joi.array(),
      Reviews: Joi.array(),
      ReviewOwner: Joi.string(),
      Submission: Joi.array()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      Email: Joi.string().email(),
      Password: Joi.string()
        .min(3)
        .max(15),
      business: Joi.array(),
      partners: Joi.array(),
      boardmembers: Joi.array(),
      events: Joi.array(),
      reports: Joi.array(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.array(),
      Notifications: Joi.array(),
      projects: Joi.array(),
      Reviews: Joi.array(),
      ReviewOwner: Joi.string(),
      Submission: Joi.array()
    };
    return Joi.validate(request, updateSchema);
  }
};
