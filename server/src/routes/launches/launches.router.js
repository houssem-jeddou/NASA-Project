const express = require("express");
const {
  httpgetAllLaunches,
  httpAddNewLaunch,
} = require("./lauches.controller");

const lauchesRouter = express.Router();

lauchesRouter.get("/", httpgetAllLaunches);
lauchesRouter.post("/", httpAddNewLaunch);

module.exports = lauchesRouter;
