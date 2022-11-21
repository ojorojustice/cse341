const routes = require("express").Router();

routes.get("/", (req, res) => {
  let contacts = {
    name: "Ojo RUFUS Olajide",
    age: 34,
  };
  res.send(contacts.name);
});

module.exports = routes;
