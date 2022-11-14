const express = require("express");
const router = express.Router();
const {
  CREATE_SCOREBOARD,
  EDIT_SCOREBOARD_NAME,
  EDIT_SCOREBOARD_DIRECTION,
  GET_ALL_SCOREBOARDS,
  GET_SCOREBOARD_BY_ID,
} = require("../controllers/Scoreboard");

router.post("/createScoreboard", "ASC", CREATE_SCOREBOARD);

router.put("/editScoreboardName/:id", EDIT_SCOREBOARD_NAME);

router.put("/editScoreboardDirection/:id", EDIT_SCOREBOARD_DIRECTION);

router.get("/getAllScoreboards", GET_ALL_SCOREBOARDS);

router.get("/getScoreboardById", GET_SCOREBOARD_BY_ID);

module.exports = router;
