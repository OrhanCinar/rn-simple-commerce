const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

const indexRouter = require("./routes/index");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const userRouter = require("./routes/login");
const categoryRouter = require("./routes/category");

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(express.static("public"));
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//products
app.get("/product/:id", productRouter);
app.get("/products", indexRouter);
app.get("/banners", indexRouter);

//cart
app.get("/cart", cartRouter);
app.post("/addtocart", cartRouter);
app.post("/removefromcart", cartRouter);
app.post("/updatecartproduct", cartRouter);
app.post("/clearcart", cartRouter);

//category
app.get("/category", categoryRouter);

//user
app.post("/register", userRouter);
app.post("/login", userRouter);

app.get("/", function(req, res, next) {
  res.jsonp({
    data: {
      status: "OK"
    }
  });
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => console.log("Server is running on port :", port));
