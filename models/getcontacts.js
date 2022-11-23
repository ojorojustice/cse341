const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const GetContactsSchema = mongoose.Schema({
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: Date,
});

module.exports = mongoose.model("Contacts", GetContactsSchema);
