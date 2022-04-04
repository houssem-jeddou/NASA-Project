const { getAlllaunches, addNewLaunch } = require("../../models/launches.model");

function httpgetAllLaunches(req, res) {
  res.status(200).json(getAlllaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  httpgetAllLaunches,
  httpAddNewLaunch,
};
