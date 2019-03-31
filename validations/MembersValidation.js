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
      skills: Joi.string().required(),
      interests: Joi.string().required(),
      events: Joi.string().required(),
      tasks: Joi.string().required(),
      reviews: Joi.string().required(),
      masterclasses: Joi.string().required(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.string(),
      Notifications: Joi.string(),
      oldProjects: Joi.string(),
      projects: Joi.string(),
      ReviewOwner: Joi.string(),
      RecommendedTasks: Joi.string()
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
        
      name: Joi.string()
        .required()
        .min(2)
        .max(20),
      age: Joi.number(),
      skills: Joi.string(),
      interests: Joi.string(),
      events: Joi.string(),
      tasks: Joi.string(),
      reviews: Joi.string(),
      masterclasses: Joi.string(),
      Lifecoach: Joi.boolean(),
      membership: Joi.date(),
      Contracts: Joi.string(),
      Notifications: Joi.string(),
      oldProjects: Joi.string(),
      projects: Joi.string(),
      ReviewOwner: Joi.string(),
      RecommendedTasks: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  }
};
