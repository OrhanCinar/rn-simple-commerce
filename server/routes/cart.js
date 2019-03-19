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

      cartProducts.find().toArray(function(err, result) {
        if (err) {
          res.status(500).jsonp(err);
        }
        res.status(200).jsonp({
          data: {
            status: "OK",
            cart: result
          }
        });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Error!" });
  }

  client.close();
});

router.post("/addToCart", function(req, res, next) {
  try {
    console.log("addToCart", res.params);
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const cart = db.collection("product");
      cart.insertOne({});

      res.jsonp({
        data: {}
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Error!" });
  }

  client.close();
});

router.post("removeFromCart", function(req, res, next) {
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      client.product.removeOne({});

      res.jsonp({
        data: {}
      });
    });
  } catch (error) {
    console.log(error);
  }

  client.close();
});

module.exports = router;
