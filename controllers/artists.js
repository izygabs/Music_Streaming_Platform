const mongoose = require("mongoose");
const { artiste } = require("../models/artistsSchema");
const { registration } = require("../validators/artistValidate");
const { StatusCodes } = require("http-status-codes");

// const artiste = mongoose.model("artist", artistSchema);

module.exports.createArtists = async (req, res) => {
  const { error, value } = registration(req.body);
  console.log(req.file);
  if (error) {
    res.send("invalid registration").status(StatusCodes.EXPECTATION_FAILED);
  } else {
    try {
      const artist = new artiste({
        artistName: value.artistName,
        genre: value.genre,
        email: value.email,
        imageURL: req.file.path,
      });
      artist.save().then(() => {
        res.send("artist registered successfully").status(StatusCodes.CREATED);
      });
    } catch (error) {
      res.send("Registration failed").status(StatusCodes.EXPECTATION_FAILED);
    }
  }
};
