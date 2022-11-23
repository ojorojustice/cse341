const asyncHandler = require("express-async-handler");

const Contacts = require("../models/getcontacts");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find({ _id: "636889ece933b0bb6260f9b7" });
  res.status(200).json(contacts);
});

module.exports = { getContacts };
//module.exports = { getContacts, putContacts, deleteContacts, postContacts };
