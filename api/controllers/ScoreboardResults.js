const ScoreboardResultSchema = require("../models/scoreboardResult");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCORE = function (req, res) {
  const score = new ScoreboardResultSchema({
    points: req.body.points,
    title: req.body.title,
  });

  score.save().then((result) => {
    return res.status(200).json({ response: "score was created successfully" });
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
module.exports.GET_ALL_RESULTS = (req, res) => {
  ScoreboardResultSchema.find()
    .sort("score")
    .then((results) => {
      return res.status(200).json({ results: results });
    });
};

module.exports.GET_RESULTS_BY_SCOREBOARD_ID = (req, res) => {};
