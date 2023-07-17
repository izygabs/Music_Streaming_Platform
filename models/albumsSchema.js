const { required } = require("joi");
const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "This field is required"],
    unique: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: [true, "This field is required"],
    enum: [
      "rap",
      "rnb",
      "hip hop",
      "afrobeat",
      "rock",
      "gospel",
      "country music",
      "amapiano",
      "soul",
      "regae",
      "pop",
      "afropop",
      "classics",
      "rock n roll",
      "jazz",
      "sonic",
    ],
  },
  artistId: {
    type: String,
    required: true,
    unique: true,
  },
  albumCover: {
    type: String,
    required: true,
  },
});

module.exports.albums = mongoose.model("albums", albumSchema);
