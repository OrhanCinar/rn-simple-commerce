var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get("/cart", jsonParser, function(req, res, next) {
  console.log("cart route hit", req.body);

  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const cartProducts = db.collection("cart");

      cartProducts.find().toArray(function(err, result) {
        if (err) {
          res.jsonp({
            data: {
              status: "NOTOK",
              message: "Cart not found"
            }
          });
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
    res.status(500).jsonp({
      data: {
        status: "NOTOK",
        message: "Internal Error!"
      }
    });
  }

  client.close();
});

router.post("/addtocart", jsonParser, function(req, res, next) {
  try {
    console.log("addToCart  route hit", req.body);

    let userId = req.body.userId;
    let productId = req.body.productId;

    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const cart = db.collection("cart");
      cart.insertOne(
        {
          productId: productId,
          userId: userId
        },
        function(err, result) {
          if (err) {
            res.jsonp({
              data: {
                status: "NOTOK",
                message: "Product Not Added"
              }
            });
          }

          if (result.insertedCount > 0) {
            res.jsonp({
              data: {
                status: "OK",
                message: "Product Added"
              }
            });
          }
        }
      );
    });
  } catch (error) {
    res.status(500).jsonp({
      data: {
        status: "NOTOK",
        message: "Internal Error!"
      }
    });
  }

  client.close();
});

router.post("/removefromcart", jsonParser, function(req, res, next) {
  console.log("removefromcart route hit", req.body);

  try {
    var client = myMongo.getClient();

    let userId = req.body.userId;
    let productId = req.body.productId;

    client.connect((err, client) => {
      myMongo.handleConnection(err);

      const db = client.db(myMongo.dbName);
      const cart = db.collection("cart");

      cart.deleteOne({ userId: userId, productId: productId }, function(
        err,
        result
      ) {
        if (err) {
          res.jsonp({
            data: {
              status: "NOTOK",
              message: "Product Not Deleted"
            }
          });
        }

        if (result.deletedCount > 0) {
          res.jsonp({
            data: {
              status: "OK",
              message: "Product Deleted"
            }
          });
        }
      });
    });
  } catch (error) {
    res.status(500).jsonp({
      data: {
        status: "NOTOK",
        message: "Internal Error!"
      }
    });
  }

  client.close();
});

module.exports = router;
