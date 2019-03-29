const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      Title: Joi.string().required(),
      description: Joi.string().required(),
      candidates: Joi.string(),
      effort: Joi.string(),
      duration: Joi.string(),
      commitment: Joi.string(),
      experience: Joi.string(),
      compensation: Joi.string(),
      partner: Joi.string(),
      Consultant: Joi.boolean(),
      consultancy: Joi.string(),
      consultantRandom: Joi.boolean(),
      consultancyAcceptance: Joi.boolean(),
      skills: Joi.string(),
      category: Joi.string(),
      state: Joi.string(),
      applicants: Joi.string(),
      assigned: Joi.string(),
      extraInfo: Joi.string(),
      memberWork: Joi.string(),
      OrientaionForTheTask: Joi.string()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      Title: Joi.string(),
      description: Joi.string(),
      candidates: Joi.string(),
      effort: Joi.string(),
      duration: Joi.string(),
      commitment: Joi.string(),
      experience: Joi.string(),
      compensation: Joi.string(),
      partner: Joi.string(),
      Consultant: Joi.boolean(),
      consultancy: Joi.string(),
      consultantRandom: Joi.boolean(),
      consultancyAcceptance: Joi.boolean(),
      skills: Joi.string(),
      category: Joi.string(),
      state: Joi.string(),
      applicants: Joi.string(),
      assigned: Joi.string(),
      extraInfo: Joi.string(),
      memberWork: Joi.string(),
      OrientaionForTheTask: Joi.string()
    };
    return Joi.validate(request, updateSchema);
  },
  categoryInfoValidation: request => {
    const bookSchema = {
      category: Joi.string().required(),
      extraInfo: Joi.string().required()
    };
    return Joi.validate(request, bookSchema);
  },
  chooseConsultantValidation: request => {
    const consultancySchema = {
      consultancy: Joi.string().required()
    };
    return Joi.validate(request, consultancySchema);
  }
};
