const { StatusCodes } = require("http-status-codes");
const { albums } = require("../models/albumsSchema");

module.exports.getAllAlbums = async (req, res) => {
  try {
    const allAlbums = await albums.find({});
    res.status(StatusCodes.OK).json(allAlbums);
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND);
  }
};
