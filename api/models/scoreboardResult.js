const mongoose = require("mongoose");

const ScoreboardResultSchema = mongoose.Schema({
  scoreboard_id: { type: String },
  points: { type: Number, required: true },
  title: { type: String, required: true, min: 3 },
  id: { type: String, required: false },
});

module.exports = mongoose.model("scoreboardResult", ScoreboardResultSchema);
