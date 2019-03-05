var express = require("express");
var router = express.Router();
import { getClient } from "../config/mymongo";

router.get("/checkout", function(req, res, next) {
  const client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);
      const db = getDb();
      const products = db.collection("product");
      console.log(products);
      //should change as list
      res.send({
        data: {
          products: {
            Id: 0,
            ProductName: product.name,
            Url: product.imageUrl,
            Price: product.price,
            OldPrice: product.oldPrice,
            Order: product.orderId,
            Description: product.description
          }
        }
      });
    });
  } catch (error) {
    console.log(error);
  }

  client.close();
});

module.exports = router;
