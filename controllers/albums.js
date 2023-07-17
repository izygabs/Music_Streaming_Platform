const { albums } = require("../models/albumsSchema");
const { artiste } = require("../models/artistsSchema");
const { uploadAlbum } = require("../validators/albumValidate");
const nodeMailer = require("../mailer");
const { StatusCodes } = require("http-status-codes");

module.exports.createAlbums = async (req, res) => {
  const { error, value } = uploadAlbum(req.body);
  if (error) {
    res.send("Album upload failed").status(400);
  } else {
    try {
      const id = req.params.id;
      const theArtist = await artiste.findById(id);
      if (theArtist) {
        const subject = `New Album created successfully`;
        const message = `Greeting ${theArtist.artistName}.
                    Your new album has been successfully added to your account,
                    You can now share your album with your fans.
                    
                    Here are the details of the album.
                    Title: ${value.title}
                    Release Year: ${value.releaseYear}
                    Genre: ${value.genre}.

                    Best regards
                    Team Musical`;

        const album = new albums({
          title: value.title,
          releaseYear: value.releaseYear,
          genre: value.genre,
          artistId: value.artistId,
          albumCover: req.file.path,
        });
        let newAlbum = await album.save();
        nodeMailer(theArtist.email, subject, message);
        res
          .json({ "Album upload successfull": newAlbum })
          .status(StatusCodes.CREATED);
      } else {
        res.status(StatusCodes.NOT_FOUND).send("Artist Id not found");
      }
    } catch (error) {
      res.send("Alum failed to upload").status(400);
    }
  }
};
