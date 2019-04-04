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
      name: Joi.string()
        .required()
        .min(2)
        .max(20),
      age: Joi.number().required(),
      skills: Joi.array().required(),
      interests: Joi.array().required(),
      events: Joi.array().required(),
      tasks: Joi.array().required(),
      reviews: Joi.array().required(),
      masterclasses: Joi.array().required(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.array(),
      Notifications: Joi.array(),
      oldProjects: Joi.array(),
      projects: Joi.array(),
      ReviewOwner: Joi.string(),
      RecommendedTasks: Joi.array()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      Email: Joi.string().email(),
      Password: Joi.string()
        .min(3)
        .max(15),
      name: Joi.string()
        .min(2)
        .max(20),
      age: Joi.number(),
      skills: Joi.array(),
      interests: Joi.array(),
      events: Joi.array(),
      tasks: Joi.array(),
      reviews: Joi.array(),
      masterclasses: Joi.array(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.array(),
      Notifications: Joi.array(),
      oldProjects: Joi.array(),
      projects: Joi.array(),
      ReviewOwner: Joi.string(),
      RecommendedTasks: Joi.array()
    };
    return Joi.validate(request, updateSchema);
  }
};
