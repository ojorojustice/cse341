const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Contacts = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
  },
  { collection: 'contacts' }
);

module.exports = mongoose.model('Contacts', Contacts);
