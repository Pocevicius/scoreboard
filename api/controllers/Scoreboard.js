const { find } = require("../models/scoreboard");
const ScoreboardSchema = require("../models/scoreboard");

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const scoreboard = new ScoreboardSchema({
    name: req.body.name,
    dataCreated: new Date(),
    scoreDirection: req.body.scoreDirection,
    results_ids: [],
  });

  console.log(scoreboard);

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
      .json({ statusMessage: "Name edited successfully", name: result });
  });
};

module.exports.EDIT_SCOREBOARD_DIRECTION = async (req, res) => {
  var nr = 0;
  const currentScoreboard = await ScoreboardSchema.findOne({
    _id: req.params.id,
  }).exec();

  if (currentScoreboard.scoreDirection === "ASC") {
    nr = 1;
  } else {
    nr = -1;
  }
  ScoreboardSchema.find({ scoreboard_id: req.params.id })
    .sort({ ScoreboardSchema: points })
    .then(result);
  return res.status(200).json({
    statusMessage: "Direction changed successfully",
    result: result,
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
