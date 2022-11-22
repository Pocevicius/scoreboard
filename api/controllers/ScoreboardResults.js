const scoreboard = require("../models/scoreboard");
const ScoreboardResultSchema = require("../models/scoreboardResult");
const ScoreboardSchema = require("../models/scoreboard");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCORE = function (req, res) {
  const score = new ScoreboardResultSchema({
    points: req.body.points,
    title: req.body.title,
  });

  score.save().then((result) => {
    ScoreboardSchema.updateOne(
      { _id: req.body.scoreboardId },
      { $push: { results_ids: result._id.toString() } }
    ).exec();

    return res
      .status(200)
      .json({ response: "score was created successfully", result: result });
  });
};

module.exports.EDIT_TITLE = function (req, res) {
  ScoreboardResultSchema.updateOne(
    { _id: req.params.id },
    { title: req.body.editedTitle }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: "Title edited successfully",
      editedTitle: result,
    });
  });
};
module.exports.GET_ALL_RESULTS = function (_req, res) {
  ScoreboardResultSchema.find()
    .sort("scores")
    .then((results) => {
      return res.status(200).json({ results: results });
    });
};

module.exports.GET_RESULTS_BY_SCOREBOARD_ID = function (req, res) {
  ScoreboardResultSchema.find({ scoreboardId: "xxxxxx" });

  ScoreboardSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ results: results });
  });
};
