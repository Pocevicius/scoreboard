const mongoose = require("mongoose");

const scoreboardResultSchema = mongoose.Schema({
  scoreboard_id: { type: String },
  points: { type: Number, required: true },
  title: { type: String, required: true, min: 3 },
});
