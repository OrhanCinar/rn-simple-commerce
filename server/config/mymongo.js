const config = require("./config");

var MongoClient = require("mongodb").MongoClient;

const handleConnection = err => {
  if (err) {
    console.log("mongo err", err);
    throw new Error("mongo not connected");
  } else {
    console.log("mongo connected");
  }
};

const getClient = () => {
  return new MongoClient(config.baseUrl);
};

const getDb = () => {
  return getClient()
    .connect()
    .then(t => t.db(config.dbName))
    .catch(c => console.log(c));
};

module.exports = { handleConnection, getClient, getDb };
