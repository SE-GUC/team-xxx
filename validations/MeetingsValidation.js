const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      MemberemailOne: Joi.string()
        .email()
        .required(),
      MemberemailTwo: Joi.string()
        .email()
        .required(),
      Location: Joi.string().required(),
      time: Joi.date().required(),
      StatusMemberOne: Joi.boolean(),
      StatusMemberTwo: Joi.boolean()
    };
    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      MemberemailOne: Joi.string()
        .email(),
        
      MemberemailTwo: Joi.string()
        .email(),
        
      Location: Joi.string(),
      Time: Joi.date(),
      StatusMemberOne: Joi.boolean(),
      StatusMemberTwo: Joi.boolean()
    };
    return Joi.validate(request, updateSchema);
  }
};
