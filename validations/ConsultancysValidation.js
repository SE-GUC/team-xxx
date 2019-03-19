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
      partners: Joi.string().required(),
      boardmembers: Joi.string().required(),
      events: Joi.string().required(),
      reports: Joi.string().required(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.string(),
      Notifications: Joi.string(),
      projects: Joi.string(),
      Reviews: Joi.string(),
      ReviewOwner: Joi.string(),
      Submission: Joi.string()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      Email: Joi.string()
      .email()
      .required(),
    Password: Joi.string()
      .min(3)
      .max(15)
      .required(),
    business: Joi.string().required(),
    partners: Joi.string().required(),
    boardmembers: Joi.string().required(),
    events: Joi.string().required(),
    reports: Joi.string().required(),
    Lifecoach: Joi.boolean(),
    membership: Joi.date(),
    Contracts: Joi.string(),
    Notifications: Joi.string(),
    projects: Joi.string(),
    Reviews: Joi.string(),
    ReviewOwner: Joi.string(),
    Submission: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  }
};
