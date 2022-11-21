require("dotenv").config();
const { MongoClient } = require("mongodb");

async function main() {
  const uri = process.env.CONNECTION_STRING;

  const client = new MongoClient(uri);
  try {
    await client.connect();
    await createContacts(client, [
      {
        firstName: "Rufus",
        lastName: "Ojo",
        email: "ojorufus@yahoo.com",
        favoriteColor: "yellow",
        birthday: new Date("2017-05-14"),
      },
      {
        firstName: "Michael",
        lastName: "Macbeth",
        email: "michaelmacbeth@gmail.com",
        favoriteColor: "green",
        birthday: new Date("2016-07-14"),
      },
      {
        firstName: "Moroni",
        lastName: "MacMillan",
        email: "moronimacmillan@yahoo.com",
        favoriteColor: "blue",
        birthday: new Date("2017-06-06"),
      },
    ]);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function createContacts(client, newContacts) {
  const result = await client
    .db("cse341contacts")
    .collection("contacts")
    .insertMany(newContacts);

  console.log(`${result.insertedCount} of results`);
  console.log(`${result.insertedIds} of results`);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("databases: ");
  databasesList.databases.forEach((db) => {
    console.log(`-${db.name}`);
  });
}
