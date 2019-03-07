var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");

router.get("/cart", function(req, res, next) {
  console.log("cart route hit");

  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const cartProducts = db.collection("cart");

      client.close();
      res.send({
        data: {
          cart: cartProducts
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("addToCart", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      client.product.insertOne({});

      res.send({
        data: {}
      });
    });
  } catch (error) {
    console.log(error);
  }

  client.close();
});

router.post("removeFromCart", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      client.product.removeOne({});

      res.send({
        data: {}
      });
    });
  } catch (error) {
    console.log(error);
  }

  client.close();
});

module.exports = router;
