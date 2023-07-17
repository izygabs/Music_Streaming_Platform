const { StatusCodes } = require("http-status-codes");
const { albums } = require("../models/albumsSchema");

module.exports.getAlbum = async (req, res) => {
  // const { error, id } = req.params.id;
  // if (error) {
  //   return res.status(StatusCodes.NOT_FOUND).send("invalid Id");
  // } else {
  //   try {
  //     const album = await albums.findById(id);
  //     res.status(StatusCodes.OK).send(album);
  //   } catch (error) {
  //     res.status(StatusCodes.BAD_REQUEST);
  //   }
  // }
  const id = req.params.id;
  console.log(id);
  const album = await albums.findById(id);
  if (!album)
    return res.status(StatusCodes.BAD_REQUEST).send("invalid credential");
  res.status(StatusCodes.OK).send(album);
};
