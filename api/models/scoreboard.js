const mongoose = require("mongoose");

const ScoreboardSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dataCreated: { type: String, required: true },
  results_ids: { type: Array },
  scoreDirection: { type: String },
});

module.exports = mongoose.model("scoreboard", ScoreboardSchema);
