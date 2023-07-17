// const { STATUS_CODES } = require("http");
const { StatusCodes } = require("http-status-codes");
const { artiste } = require("../models/artistsSchema");

module.exports.getArtist = async (req, res) => {
  console.log(req.params.id);
  const artist = await artiste.findById(req.params.id);
  if (!artist)
    return res.status(StatusCodes.BAD_REQUEST).send("invalid credential");
  res.status(StatusCodes.OK).send(artist);
};
