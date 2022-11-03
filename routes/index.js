const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Rufus Olajide Ojo");
});

module.exports = routes;
