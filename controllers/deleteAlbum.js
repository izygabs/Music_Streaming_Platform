const { StatusCodes } = require("http-status-codes");
const { albums } = require("../models/albumsSchema");

module.exports.deleteAlbum = async (req, res) => {
  const id = req.params.id;
  const album = await albums.findByIdAndDelete(id);
  if (!album) res.status(StatusCodes.BAD_REQUEST).send("invalid id");
  res.status(StatusCodes.OK).send(album);
};
