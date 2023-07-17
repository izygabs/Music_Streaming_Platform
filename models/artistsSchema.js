// const { string } = require("joi");
const { string } = require("joi");
const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    required: [true, "This field is required"],
    unique: true,
    min: [3, "must be atleast these characters"],
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
  email: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
});

module.exports.artiste = mongoose.model("artiste", artistSchema);
