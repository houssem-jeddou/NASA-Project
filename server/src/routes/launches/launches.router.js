const express = require("express");
const { getAllLaunches } = require("./lauches.controller");

const lauchesRouter = express.Router();

lauchesRouter.get("/", getAllLaunches);

module.exports = lauchesRouter;
