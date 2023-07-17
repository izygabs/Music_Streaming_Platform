const { albums } = require("../models/albumsSchema");
const { StatusCodes } = require("http-status-codes");

module.exports.updateAlbum = async (req, res) => {
  const id = req.params.id;
  const update = req.body.genre;
  const album = await albums.findByIdAndUpdate(id, { genre: update });
  if (!album)
    return res.status(StatusCodes.BAD_REQUEST).send("invalid credential");
  res.status(StatusCodes.OK).send(album);
};
