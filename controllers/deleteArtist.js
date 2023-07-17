const { artiste } = require("../models/artistsSchema");
const { StatusCodes } = require("http-status-codes");

module.exports.deleteArtist = async (req, res) => {
  const id = req.params.id;
  try {
    const artist = await artiste.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json(artist);
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND);
  }
};
