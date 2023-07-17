const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./routes/allRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const PORT = process.env.PORT || 7000;

mongoose.connect("mongodb://127.0.0.1:27017/Music-Streaming-Platform");

app.post("/home", (req, res) => {
  res.send("music is life");
});

app.use(express.json());

app.use(route);

app.use(cors);

app.use(cookieParser);

app.use(helmet);

app.use(xssClean);

app.listen(PORT, () => {
  console.log(`Server is served on port ${7000}`);
});
