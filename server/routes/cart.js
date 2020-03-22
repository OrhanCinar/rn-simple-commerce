var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var ObjectID = require("mongodb").ObjectID;
const cdnPath = "http://192.168.1.13:5000/assets/Products/Images/";

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
        let total = 0;
        let subTotal = 0;

        result.forEach(element => {
          //console.log(element);

          total += element.quantity * element.price;
          subTotal += element.quantity * element.price;
        });

        client.close();
        //console.log(result);
        res.status(200).jsonp({
          data: {
            status: "OK",
            cart: result,
            totals: {
              total,
              subTotal,
              discount: 0
            }
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

async function findProduct(productId) {
  const client = myMongo.getClient();
  //myMongo.handleConnection(err);
  const dbo = await client.connect();
  const db = dbo.db(myMongo.dbName);
  const product = await db
    .collection("product")
    .findOne({ _id: ObjectID(productId) });
  //console.log("findProduct", product.imageUrl);
  return product.imageUrl;
}

router.post("/addtocart", jsonParser, function(req, res, next) {
  try {
    console.log("addToCart  route hit", req.body);

    let userId = req.body.userId;
    let productId = req.body.productId;
    let quantity = req.body.quantity;
    let imageUrl = req.body.imageUrl;
    let price = req.body.price;
    let name = req.body.name;

    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const cart = db.collection("cart");

      cart.insertOne(
        {
          productId: productId,
          price: price,
          imageUrl: imageUrl,
          quantity: quantity,
          userId: userId,
          name: name
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

router.post("/updatecartproduct", jsonParser, function(req, res, next) {
  try {
    console.log("updatecartproduct  route hit", req.body);

    let userId = req.body.userId;
    let productId = req.body.productId;
    let quantity = req.body.quantity;

    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const cart = db.collection("cart");
      cart.findOneAndUpdate(
        {
          productId: productId,
          userId: userId
        },
        {
          $set: { quantity: quantity }
        },
        { upsert: false },
        function(err, result) {
          if (err) {
            console.log("err", err);
            res.jsonp({
              data: {
                status: "NOTOK",
                message: "Product Not Updated"
              }
            });
          }
          //console.log("result", result.ok);
          if (result.ok === 1) {
            res.jsonp({
              data: {
                status: "OK",
                message: "Product Updated"
              }
            });
          }
        }
      );
    });

    client.close();
  } catch (error) {
    res.status(500).jsonp({
      data: {
        status: "NOTOK",
        message: "Internal Error!"
      }
    });
  }
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

router.post("/clearcart", jsonParser, function(req, res, next) {
  console.log("clearcart route hit", req.body);

  try {
    var client = myMongo.getClient();

    //let userId = req.body.userId;

    client.connect((err, client) => {
      myMongo.handleConnection(err);

      const db = client.db(myMongo.dbName);
      const cart = db.collection("cart");

      cart.deleteMany({}, function(err, result) {
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
  res.jsonp({
    data: {
      status: "OK",
      message: "Nothing Happened"
    }
  });
  client.close();
});

module.exports = router;
