var express = require("express");
var router = express.Router();
var myMongo = require("../config/mymongo");
var ObjectID = require("mongodb").ObjectID;
const cdnPath = "http://192.168.1.13:5000/assets/Products/Images/";

router.get("/product/:id", function(req, res, next) {
  console.log("product route hit", req.params);

  const { id } = req.params;

  if (id === "0") {
    res.jsonp({
      data: {
        status: "NOTOK",
        product: {}
      }
    });
  }

  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      let db = client.db(myMongo.dbName);

      //console.log("id", id);
      db.collection("product").findOne({ _id: ObjectID(id) }, function(
        err,
        product
      ) {
        if (err) {
          res.jsonp({
            data: {
              status: "NOTOK",
              message: "Product not found"
            }
          });
        }

        if (product) {
          //console.log(result);
          product.imageUrl = cdnPath.concat(product.imageUrl);
          client.close();
          res.jsonp({
            data: {
              status: "OK",
              product: product
            }
          });
        } else {
          res.jsonp({
            status: "NOTOK"
          });
        }
      }); // db collect
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

module.exports = router;
