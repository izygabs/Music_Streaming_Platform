const Joi = require("joi");

const uploadAlbum = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().trim(),
    releaseYear: Joi.number().required(),
    genre: Joi.string().required().trim(),
    artistId: Joi.string().required(),
    albumCover: Joi.string(),
  });
  return schema.validate(data);
};

module.exports.uploadAlbum = uploadAlbum;
