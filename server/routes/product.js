var express = require("express");
var router = express.Router();
import { getClient, getDb } from "../config/mymongo";

router.get("/product:id", function(req, res, next) {
  const client = getClient();

  try {
    client.connect((err, client) => {
      handleConnection(err);
      const db = getDb();
      const product = db.collection("product").findOne({ id: req.params.id });
      console.log(products);

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
