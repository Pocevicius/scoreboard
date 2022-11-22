const express = require("express");
const bodyParser = require("body-parser");
const ScoreBoardRoutes = require("./api/routes/Scoreboard.js");
const ScoreBoardResultRoutes = require("./api/routes/ScoreboardResult");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => {
    console.log("you are fucked");
    console.log(err);
  });

app.use(ScoreBoardRoutes);
app.use(ScoreBoardResultRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.listen(3000);
