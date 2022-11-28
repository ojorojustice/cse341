const asyncHandler = require('express-async-handler');
const Contacts = require('../models/getcontacts');

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find();
  res.status(200).json(contacts);
});

const getOneContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.findById(req.params.id);
  res.status(200).json(contacts);
});

const postContacts = asyncHandler(async (req, res) => {
  if (!req.body) {
    console.log(req.body.name);
    res.status(400);
    throw new Error('Please add some contact');
    //.json({ message: "Please add a text field" });
  }
  console.log('Post is here.....');
  let contacts;

  try {
    contact = await Contacts.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    });
    console.log('Contact Created');
  } catch (err) {
    console.log('Error while inserting', err);
  }

  res.status(200).json(contacts);
});

const putContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.findById(req.params.id);
  if (!contacts) {
    res.status(400);
    throw new Error('Contact not found');
  }
  const updatedContact = await Contacts.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedContact);
});

const deleteContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.findById(req.params.id);
  if (!contacts) {
    res.status(400);
    throw new Error('Contact not found');
  }
  const deletedContact = await Contacts.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedContact);
});

module.exports = { getContacts, getOneContacts, putContacts, deleteContacts, postContacts };
