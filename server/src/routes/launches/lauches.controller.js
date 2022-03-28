const { getAlllaunches } = require("../../models/launches.model");

function httpgetAllLaunches(req, res) {
  res.status(200).json(getAlllaunches());
}

module.exports = {
  httpgetAllLaunches,
};
