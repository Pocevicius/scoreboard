const mongoose = require("mongoose");

const scoreboardSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dataCreated: { type: new Date(), required: true },
  results_ids: { type: Array, required: false },
  scoreDirection: { type: String, required: true },
});
