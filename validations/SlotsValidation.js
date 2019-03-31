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
      lifecoachEmail: Joi.string().email(),
      number: Joi.date(),
      Date: Joi.date(),
      startTime: Joi.date(),
      endTime: Joi.date(),
      status: Joi.string(),
      applicant: Joi.string(),
      Location: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  },
  bookValidation: request => {
    const bookSchema = {
      applicant: Joi.string(),
      Location: Joi.string()
    };
    return Joi.validate(request, bookSchema);
  }
};
