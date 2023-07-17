const { artiste } = require("../models/artistsSchema");
const { StatusCodes } = require("http-status-codes");

module.exports.updateArtist = async (req, res) => {
  // console.log(req.body);
  // const check = req.body;
  // const { error, value } = req.body;
  // console.log(value);
  const id = req.params.id;
  const art = req.body.artistName;
  const artist = await artiste.findByIdAndUpdate(id, {
    artistName: art,
  });
  if (!artist)
    return res.status(StatusCodes.BAD_REQUEST).send("invalid credential");
  // console.log(artist);
  res.status(StatusCodes.OK).send(artist);
};
