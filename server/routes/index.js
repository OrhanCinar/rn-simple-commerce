import { getDb, getClient } from "../config/mymongo";

var express = require("express");
var router = express.Router();

//List Index
router.get("/", function(req, res, next) {
  var client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);
      const db = getDb();
      const products = db.collection("products");
      const banners = db.collection("banners");
      console.log(products);

      res.send({
        data: {
          banner: banners,
          products: products
        }
      });
    });
  } catch (error) {
    console.log(error);
  }

  client.close();
});

//Insert Product
router.post("/addProducts", (req, res) => {
  const client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);

      client.products.insertOne({});
    });
  } catch (error) {}
});

module.exports = router;
