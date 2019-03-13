var myMongo = require("../config/mymongo");
var express = require("express");
var router = express.Router();
const cdnPath = "http://192.168.1.22:5000/assets/Products/Images/";
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
          res.jsonp(err);
        }

        if (result.length > 0) {
          result.forEach(item => {
            //console.log(item.imageUrl);
            item.imageUrl = cdnPath.concat(item.imageUrl);
          });

          res.jsonp({
            data: {
              products: result
            }
          });
        }
        //add else condition
      });

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({ error: "Internal Error!" });
  }
});

//Get banners
router.get("/banners", function(req, res, next) {
  console.log("banner route hit");
  try {
    var client = myMongo.getClient();
    client.connect((err, client) => {
      myMongo.handleConnection(err);
      const db = client.db(myMongo.dbName);
      const colBanners = db.collection("banner");

      colBanners.find().toArray(function(err, result) {
        if (err) {
          res.jsonp(err);
        }

        if (result.length > 0) {
          result.forEach(item => {
            item.imageUrl = cdnPath.concat(item.imageUrl);
          });

          res.jsonp({
            data: {
              banners: result
            }
          });
        }
        //add else condition
      });

      client.close();
    });
  } catch (error) {
    res.status(500).jsonp({ error: "Internal Error!" });
  }
});

module.exports = router;
