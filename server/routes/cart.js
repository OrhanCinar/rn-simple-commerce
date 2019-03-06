var express = require("express");
var router = express.Router();
import { getClient, getDb } from "../config/mymongo";

router.get("/cart", function(req, res, next) {
  var client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);
      const db = getDb();
      const cart = db.collection("cart");

      console.log(products);

      res.send({
        data: {
          cart: cart
        }
      });
    });
  } catch (error) {
    console.log(error);
  }

  client.close();
});

router.post("addToCart", function(req, res, next) {
  var client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);
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
  var client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);
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
