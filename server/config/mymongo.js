import { baseUrl, dbName } from "../config/config";

var MongoClient = require("mongodb").MongoClient;

function handleConnection(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
}

function getClient() {
  return new MongoClient(baseUrl);
}

function getDb() {
  return client.db(dbName);
}

export { handleConnection, getClient, getDb };
