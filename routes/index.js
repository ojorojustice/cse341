const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Ojo Rufus Olajide");
});

module.exports = routes;
