var myMongo = {};
var MongoClient = require("mongodb").MongoClient;

const baseUrl = "mongodb://localhost:27017/simplecommerce";
const dbName = "simplecommerce";

myMongo.handleConnection = err => {
  if (err) {
    console.log("mongo err", err);
    throw new Error("mongo not connected");
  } else {
    console.log("mongo connected");
  }
};

myMongo.getClient = () => {
  return new MongoClient(baseUrl, { useNewUrlParser: true });
};

// myMongo.getDb = () => {
//   return new MongoClient(this.baseUrl)
//     .connect()
//     .then(t => t.db(this.dbName))
//     .catch(c => console.log(c));
// };

myMongo.baseUrl = baseUrl;
myMongo.dbName = dbName;

module.exports = myMongo;
