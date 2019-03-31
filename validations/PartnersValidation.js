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
      field: Joi.string().required(),
      projects: Joi.string().required(),
      feedback: Joi.string().required(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.string(),
      Notifications: Joi.string(),
      reviews: Joi.string(),
      ReviewOwner: Joi.string()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      Email: Joi.string()
        .email(),
        
      Password: Joi.string()
        .min(3)
        .max(15),
        
      business: Joi.string(),
      partners: Joi.string(),
      boardmembers: Joi.string(),
      events: Joi.string(),
      field: Joi.string(),
      projects: Joi.string(),
      feedback: Joi.string(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.string(),
      Notifications: Joi.string(),
      reviews: Joi.string(),
      ReviewOwner: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  }
};
