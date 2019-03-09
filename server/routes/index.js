var myMongo = require("../config/mymongo");
var express = require("express");
var router = express.Router();

//Get Products
router.get("/products", function(req, res, next) {
  console.log("index route hit");
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const collProducts = db.collection("product");

      collProducts.find().toArray(function(err, result) {
        if (err) {
          res.send(err);
        }

        if (result.length) {
          res.jsonp({
            data: {
              products: result
            }
          });
        }
      });

      client.close();
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Error!" });
  }
});

//Get banners
router.get("/banners", function(req, res, next) {
  console.log("index route hit");
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const colBanners = db.collection("banner");

      colBanners.find().toArray(function(err, result) {
        if (err) {
          res.send(err);
        }

        if (result.length) {
          res.jsonp({
            data: {
              banners: result
            }
          });
        }
      });

      client.close();
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Error!" });
  }
});

module.exports = router;
