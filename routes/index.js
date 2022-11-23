const express = require("express");
const routes = express.Router();
//const {getContacts, putContacts, deleteContacts,postContacts} = require("../controllers/ContactControllers");
const { getContacts } = require("../controllers/ContactControllers");
const connectDB = require("../db/Connection");

connectDB();
routes.get("/", (req, res) => {
  res.status(200).json({
    name: "Ojo RUFUS Olajide",
    age: 34,
  });
});

routes.get("/contacts", getContacts);

//routes.put("/:id",putContacts);

//routes.delete("/:id", deleteContacts)

//routes.post("/", postContacts);

module.exports = routes;
