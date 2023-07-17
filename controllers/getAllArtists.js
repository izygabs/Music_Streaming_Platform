const { StatusCodes } = require("http-status-codes");
const { artiste } = require("../models/artistsSchema");
// const { registration } = require("../validators/artistValidate");

module.exports.getAllArtists = async (req, res) => {
  try {
    const allArtists = await artiste.find({});
    res.status(StatusCodes.OK).json(allArtists);
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND);
  }
};
