const { Router } = require("express");
const route = Router();
const { createArtists } = require("../controllers/artists");
const { createAlbums } = require("../controllers/albums");
const { getAllArtists } = require("../controllers/getAllArtists");
const { getAllAlbums } = require("../controllers/getAllAlbums");
const { getArtist } = require("../controllers/getArtist");
const { updateArtist } = require("../controllers/updateArtist");
const { deleteArtist } = require("../controllers/deleteArtist");
const { getAlbum } = require("../controllers/getAlbum");
const { updateAlbum } = require("../controllers/updateAlbum");
const { deleteAlbum } = require("../controllers/deleteAlbum");
const multer = require("multer");
// const { object } = require("joi");
const upload = multer({ dest: "images/" });

route.post("/createArtist", upload.single("imageURL"), createArtists);

route.get("/artist/:id", getArtist);

route.get("/artists", getAllArtists);

route.put("/artist/:id", updateArtist);

route.delete("/artist/:id", deleteArtist);

route.post("/createAlbum/:id", upload.single("albumCover"), createAlbums);

route.get("/album/:id", getAlbum);

route.get("/albums", getAllAlbums);

route.put("/album/:id", updateAlbum);

route.delete("/album/:id", deleteAlbum);

module.exports = route;
