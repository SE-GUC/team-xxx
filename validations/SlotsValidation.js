const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      lifecoachEmail: Joi.string()
        .email()
        .required(),
      number: Joi.date().required(),
      Date: Joi.date().required(),
      startTime: Joi.date().required(),
      endTime: Joi.date().required(),
      status: Joi.string(),
      applicant: Joi.string(),
      Location: Joi.string()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      lifecoachEmail: Joi.string()
        .email()
        .required(),
      number: Joi.date().required(),
      Date: Joi.date().required(),
      startTime: Joi.date().required(),
      endTime: Joi.date().required(),
      status: Joi.string(),
      applicant: Joi.string(),
      Location: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  }
};
