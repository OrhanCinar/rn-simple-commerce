var rest = require("rest");
var mime = require("rest/interceptor/mime");
var client = rest.wrap(mime, { mime: "application/json" });

test("Test Get Cart", async () => {
  return client({
    path: "http://localhost:5000/cart",
    method: "GET",
    entity: { userId: 0 }
  }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

test("Test Add To Cart", async () => {
  return client({
    path: "http://localhost:5000/addtocart",
    method: "POST",
    entity: { userId: 0, productId: 1 }
  }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

test("Test Remove From Cart", async () => {
  return client({
    path: "http://localhost:5000/removefromcart",
    method: "POST",
    entity: { userId: 0, productId: 1 }
  }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});
