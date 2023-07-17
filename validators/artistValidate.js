const Joi = require("joi");

const registration = (data) => {
  const schema = Joi.object({
    artistName: Joi.string().required().trim(),
    genre: Joi.string().required().trim(),
    email: Joi.string().required(),
    imageURL: Joi.string(),
  });
  return schema.validate(data);
};

module.exports.registration = registration;
