const express = require("express");
const { httpgetAllLaunches } = require("./lauches.controller");

const lauchesRouter = express.Router();

lauchesRouter.get("/", httpgetAllLaunches);

module.exports = lauchesRouter;
