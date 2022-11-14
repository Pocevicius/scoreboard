const ScoreboardSchema = require("../models/scoreboard");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const scoreboard = new ScoreboardSchema({
    name: req.body.name,
    dataCreated: req.Date(),
    scoreDirection: "ASC",
    results_ids: [],
  });

  scoreboard.save().then((result) => {
    return res
      .status(200)
      .json({ response: "scoreboard was created successfully" });
  });
};

module.exports.EDIT_SCOREBOARD_NAME = (req, res) => {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedName }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Name edited successfully", editedName: result });
  });
};

module.exports.EDIT_SCOREBOARD_DIRECTION = (req, res) => {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { scoreDirection: req.body.editedDirection }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: "Direction edited successfully",
      editedDirection: result,
    });
  });
};

module.exports.GET_ALL_SCOREBOARDS = (req, res) => {
  ScoreboardSchema.find()
    .sort("scoreboards")
    .then((results) => {
      return res.status(200).json({ scoreboards: results });
    });
};

module.exports.GET_SCOREBOARD_BY_ID = (req, res) => {
  ScoreboardSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ scoreboards: results });
  });
};
