const api = require("express").Router();

require("./devices")(api);
require("./printer")(api);

module.exports = (app) => app.use("/api", api);
