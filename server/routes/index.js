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
      const products = db.collection("product");
      const banners = db.collection("banner");
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

module.exports = router;
